'use client'
import React, { useEffect, useState } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
}

const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
  const strokeWidth = 16;
  const size = 120;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // Calculate the new offset based on the percentage
    const newOffset = circumference - (percentage / 100) * circumference;
    // Set the new offset after a short delay to trigger the transition
    const timer = setTimeout(() => {
      setOffset(newOffset);
    }, 100); // Adjust this delay to control the transition speed

    // Clear the timeout when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [percentage, circumference]);

  return (
    <div className="flex flex-col gap-y-2 p-4 items-center">
      <div
        className="relative"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: 'drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.2))', // Add the white shadow here
        }}
      >
        <svg width={size} height={size} className="absolute">
          <circle
            className="text-gray-300 dark:text-gray-700 stroke-current"
            strokeWidth={strokeWidth}
            stroke="#f3f4f6" // Background color of the circle
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          <circle
            className="text-gradient-stroke stroke-current text-accent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 0.5s ease-out', // Add the transition style here
            }}
          />
        </svg>
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center"
          style={{ fontSize: `${radius / 2.5}px`, fontFamily: 'Poppins, sans-serif' }}
        >
          {percentage}%
        </div>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Skill;
