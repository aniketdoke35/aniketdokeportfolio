import { useEffect, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const TARGET = 'Aniket Doke Portfolio';

function useScramble(target: string, startDelay: number) {
  const [display, setDisplay] = useState<string[]>(Array(target.length).fill('·'));
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let scrambleTimer: ReturnType<typeof setInterval>;

    const startTimer = setTimeout(() => {
      if (cancelled) return;

      // Scramble phase
      scrambleTimer = setInterval(() => {
        if (cancelled) return;
        setDisplay(prev =>
          prev.map((_, i) =>
            target[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]
          )
        );
      }, 50);

      // Reveal letters one by one after 900ms of scramble
      const revealTimer = setTimeout(() => {
        clearInterval(scrambleTimer);
        if (cancelled) return;

        const indices = Array.from({ length: target.length }, (_, i) => i)
          .filter(i => target[i] !== ' ')
          .sort(() => Math.random() - 0.5);

        let count = 0;
        const revealStep = setInterval(() => {
          if (cancelled) { clearInterval(revealStep); return; }
          if (count >= indices.length) {
            clearInterval(revealStep);
            setDone(true);
            return;
          }
          const idx = indices[count];
          setDisplay(prev => {
            const next = [...prev];
            next[idx] = target[idx];
            return next;
          });
          setProgress(((count + 1) / indices.length) * 100);
          count++;
        }, 70);
      }, 900);
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(startTimer);
      clearInterval(scrambleTimer);
    };
  }, [target, startDelay]);

  return { display, done, progress };
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const { display, done, progress } = useScramble(TARGET, 600);

  // Fade in "Welcome" immediately
  useEffect(() => {
    const t = setTimeout(() => setWelcomeVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Exit once text is fully revealed
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 750);
    }, 800);
    return () => clearTimeout(t);
  }, [done, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        transition: 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? 'none' : 'all',
      }}
    >
      {/* Animated blobs — identical to main site */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-10%',
          width: '40vw', height: '40vw', borderRadius: '50%',
          background: 'rgba(96,165,250,0.12)', filter: 'blur(100px)',
          animation: 'ls-blob 15s infinite',
        }} />
        <div style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: '35vw', height: '35vw', borderRadius: '50%',
          background: 'rgba(167,139,250,0.12)', filter: 'blur(100px)',
          animation: 'ls-blob 15s 2s infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '20%',
          width: '50vw', height: '50vw', borderRadius: '50%',
          background: 'rgba(244,114,182,0.10)', filter: 'blur(100px)',
          animation: 'ls-blob 15s 4s infinite',
        }} />
      </div>

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px' }}>

        {/* WELCOME label — fades up first */}
        <div
          style={{
            fontSize: 'clamp(13px, 1.5vw, 15px)',
            fontWeight: 500,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#0066cc',
            marginBottom: 24,
            opacity: welcomeVisible ? 1 : 0,
            transform: welcomeVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          Welcome
        </div>

        {/* "Aniket Doke Portfolio" — scramble reveal */}
        <div
          style={{
            fontSize: 'clamp(36px, 7.5vw, 80px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 0,
            marginBottom: 52,
          }}
        >
          {display.map((ch, i) => {
            const isRevealed = ch === TARGET[i];
            const isPortfolio = i >= TARGET.indexOf('P'); // "Portfolio" part

            return (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  // "Aniket Doke" → white/gray gradient, "Portfolio" → blue/violet
                  background: isPortfolio
                    ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                    : 'linear-gradient(135deg, #ffffff, #d1d5db)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: isRevealed ? 'transparent' : undefined,
                  backgroundClip: 'text',
                  color: isRevealed ? 'transparent' : 'rgba(255,255,255,0.18)',
                  opacity: ch === '·' ? 0.2 : 1,
                  // Bounce in when revealed
                  animation: isRevealed ? 'ls-pop 0.35s cubic-bezier(0.34,1.56,0.64,1)' : undefined,
                  transition: 'opacity 0.15s',
                  // Space between words
                  width: TARGET[i] === ' ' ? 'clamp(10px,1.5vw,20px)' : undefined,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {TARGET[i] === ' ' ? '\u00A0' : ch}
              </span>
            );
          })}
        </div>

        {/* Progress bar */}
        <div style={{
          width: 'min(240px, 65vw)',
          height: 1,
          backgroundColor: 'rgba(255,255,255,0.07)',
          borderRadius: 99,
          margin: '0 auto 18px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0066cc, #3b82f6, #8b5cf6)',
            borderRadius: 99,
            transition: 'width 0.08s linear',
          }} />
        </div>

        {/* Status text */}
        <p style={{
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(245,245,247,0.28)',
          margin: 0,
          transition: 'opacity 0.4s',
        }}>
          {done ? 'Entering…' : `${Math.round(progress)}%`}
        </p>
      </div>

      <style>{`
        @keyframes ls-blob {
          0%   { transform: translate(0,    0)    scale(1);   }
          33%  { transform: translate(30px, -50px) scale(1.1); }
          66%  { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0,    0)    scale(1);   }
        }
        @keyframes ls-pop {
          0%   { transform: translateY(12px) scale(0.7); opacity: 0; }
          60%  { transform: translateY(-3px)  scale(1.08); }
          100% { transform: translateY(0)     scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}
