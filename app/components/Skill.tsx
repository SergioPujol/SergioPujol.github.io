import React from 'react'

interface SkillProps {
    name: string
    percentage: number
}

const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
    const strokeWidth = 16; // Adjust this value to change the thickness of the progress bar
    const size = 120; // Width and height of the circle container (in pixels)
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
        <div className='flex flex-col gap-y-2 p-4 items-center'>
            <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
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
                />
                </svg>
                <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center"
                style={{ fontSize: `${radius / 2.5}px`, fontFamily: 'Poppins, sans-serif' }}
                >
                {percentage}%
                </div>
            </div>
            <div>
                {name}
            </div>
        </div>
    );
  };
  
  export default Skill;