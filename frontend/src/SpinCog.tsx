// SpinCog.tsx
import { useEffect, useRef } from "react";
import { FaCog } from "react-icons/fa";

export function SpinCog({ outFreq }: { outFreq: number }) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const [anim] = el.getAnimations();
    if (!anim) return;

    const hz = Math.max(0, outFreq || 0);     // base = 1 rev/sec
    anim.playbackRate = Math.min(20, hz);     // smooth speed change
    if (hz === 0) anim.pause(); else anim.play();
  }, [outFreq]);

  return (
    <FaCog
      ref={ref}
      className="text-9xl mx-auto inline-block origin-center animate-[spin_1s_linear_infinite]"
      aria-hidden
    />
  );
}
