import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

interface Dashboard {
  label: string;
  percent: number;
  color?: string;
}

const Dashboard: React.FC<Dashboard> = ({
  label,
  percent,
  color = "#ec4899",
}) => {
  const radius = 40;
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.8,
  });

  const strokeDashoffset = useTransform(
    smoothProgress,
    [0, 100],
    [circumference, 0]
  );

  const [displayPercent, setDisplayPercent] = useState(0);

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      rawProgress.set(percent);
    }
  }, [inView, percent, rawProgress]);

  // Animate number counter
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setDisplayPercent(Math.round(latest));
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center space-y-2 relative"
    >
      <svg width="140" height="140" className="-rotate-90">
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={stroke}
        />
        <motion.circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div className="absolute top-[52px] text-white text-xl font-semibold">
        {displayPercent}%
      </div>

      <p className="text-sm text-textSecondary">{label}</p>
    </div>
  );
};

export default Dashboard;
