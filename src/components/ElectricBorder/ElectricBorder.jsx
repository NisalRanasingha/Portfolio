import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder = ({ children, color = '#5227FF', speed = 1, chaos = 1, thickness = 2, className, style }) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-displace-${rawId}`;
  const svgRef = useRef(null);
  const rootRef = useRef(null);
  const strokeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateAnim = () => {
    const svg = svgRef.current;
    const host = rootRef.current;
    if (!svg || !host || isMobile) return;

    if (strokeRef.current) {
      strokeRef.current.style.filter = `url(#${filterId})`;
    }

    const width = Math.max(1, Math.round(host.clientWidth || host.getBoundingClientRect().width || 0));
    const height = Math.max(1, Math.round(host.clientHeight || host.getBoundingClientRect().height || 0));

    const dyAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dy"]'));
    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute('values', `${height}; 0`);
      dyAnims[1].setAttribute('values', `0; -${height}`);
    }

    const dxAnims = Array.from(svg.querySelectorAll('feOffset > animate[attributeName="dx"]'));
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute('values', `${width}; 0`);
      dxAnims[1].setAttribute('values', `0; -${width}`);
    }

    const baseDur = 6;
    const dur = Math.max(0.001, baseDur / (speed || 1));
    [...dyAnims, ...dxAnims].forEach(a => a.setAttribute('dur', `${dur}s`));

    const disp = svg.querySelector('feDisplacementMap');
    if (disp) disp.setAttribute('scale', String(30 * (chaos || 1)));

    const filterEl = svg.querySelector(`#${CSS.escape(filterId)}`);
    if (filterEl) {
      filterEl.setAttribute('x', '-200%');
      filterEl.setAttribute('y', '-200%');
      filterEl.setAttribute('width', '500%');
      filterEl.setAttribute('height', '500%');
    }

    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach(a => {
        if (typeof a.beginElement === 'function') {
          try {
            a.beginElement();
          } catch {
            console.warn('ElectricBorder: beginElement failed');
          }
        }
      });
    });
  };

  useEffect(() => {
    updateAnim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed, chaos, isMobile]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;
    const ro = new ResizeObserver(() => updateAnim());
    ro.observe(rootRef.current);
    updateAnim();
    return () => ro.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const inheritRadius = {
    borderRadius: style?.borderRadius ?? 'inherit'
  };

  const strokeStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color
  };

  const glow1Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5
  };

  const glow2Style = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5
  };

  const bgGlowStyle = {
    ...inheritRadius,
    transform: 'scale(1.08)',
    filter: 'blur(32px)',
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
  };

  // Mobile fallback: animated gradient border
  const mobileAnimatedStyle = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: 'transparent',
    backgroundImage: `
      linear-gradient(white, white),
      linear-gradient(90deg, 
        ${color} 0%, 
        ${hexToRgba(color, 0.5)} 25%,
        ${color} 50%,
        ${hexToRgba(color, 0.5)} 75%,
        ${color} 100%
      )
    `,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    animation: 'electricBorderMove 3s linear infinite'
  };

  return (
    <>
      {isMobile && (
        <style>{`
          @keyframes electricBorderMove {
            0% { background-position: 0 0, 0% 0; }
            100% { background-position: 0 0, 200% 0; }
          }
        `}</style>
      )}
      
      <div ref={rootRef} className={'relative isolate ' + (className ?? '')} style={style}>
        {!isMobile && (
          <svg
            ref={svgRef}
            className="absolute w-0 h-0 opacity-0 pointer-events-none"
            style={{ position: 'absolute', left: 0, top: 0 }}
            aria-hidden
            focusable="false"
          >
            <defs>
              <filter id={filterId} colorInterpolationFilters="sRGB" x="-200%" y="-200%" width="500%" height="500%">
                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="1" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
                  <animate attributeName="dy" values="700; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="1" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
                  <animate attributeName="dy" values="0; -700" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise1" seed="2" />
                <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
                  <animate attributeName="dx" values="490; 0" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="10" result="noise2" seed="2" />
                <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
                  <animate attributeName="dx" values="0; -490" dur="6s" repeatCount="indefinite" calcMode="linear" />
                </feOffset>

                <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
                <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
                <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="combinedNoise"
                  scale="30"
                  xChannelSelector="R"
                  yChannelSelector="B"
                />
              </filter>
            </defs>
          </svg>
        )}

        <div className="absolute inset-0 pointer-events-none" style={inheritRadius}>
          {isMobile ? (
            // Simplified mobile version with animated gradient
            <div className="absolute inset-0 box-border" style={mobileAnimatedStyle} />
          ) : (
            // Full desktop version with SVG filters
            <>
              <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
              <div className="absolute inset-0 box-border" style={glow1Style} />
              <div className="absolute inset-0 box-border" style={glow2Style} />
            </>
          )}
          <div className="absolute inset-0" style={bgGlowStyle} />
        </div>

        <div className="relative" style={inheritRadius}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ElectricBorder;