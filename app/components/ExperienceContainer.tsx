import React, { useEffect, useState } from 'react'
import LanguageContainer from './LanguageContainer';

interface ExperienceProps {
    mainInfo: { company: string, position: string, period: string, techs: Array<string> };
    description: Array<string>;
    onClickEvent: any;
    isOpen: boolean;
}

const ExperienceContainer: React.FC<ExperienceProps> = ({
    mainInfo, description, onClickEvent, isOpen
}) => {

    const { company, position, period, techs } = mainInfo;

  return (
    <div className={`flex flex-col xl:flex-row m-2 min-h-[260px] xl:h-64 p-4 rounded-md ${isOpen ? 'xl:w-3/5 bg-accent/10' : 'xl:w-1/5'} transition-all duration-1000 cursor-pointer overflow-hidden hover:bg-accent/10`} onClick={onClickEvent}>
        <div className={`xl:min-w-[200px] grow flex flex-col gap-y-3 items-center justify-center`}>
            <span className='text-t-primary text-2xl text-center'>{company}</span>
            <span className='text-t-secondary text-xl text-center'>{position}</span>
            <span className='text-t-secondary text-md'>{period}</span>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} xl:min-w-[400px] xl:w-2/3 p-4 flex flex-col gap-y-5 justify-center`}>
            <ul className={`experience-list flex flex-col gap-y-3`}>
                {description.map((point: string) => (
                    <li key={point} className='pl-8 relative'>{point}</li>
                ))}
            </ul>
            <ul className={`flex flex-wrap gap-x-2 gap-y-4 text-sm justify-center`}>
                {techs.map((tech: string) => (
                    <li key={tech}><LanguageContainer title={tech}/></li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ExperienceContainer