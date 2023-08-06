import React from 'react'

interface SectionTitleProps {
    title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title
}) => {
  return (
    <div className='flex gap-x-2'>
        <h2 className='text-accent text-3xl'>{'//'}</h2>
        <h1 className='text-bold text-3xl flex items-center section-title'>{title}</h1>
    </div>
  )
}

export default SectionTitle