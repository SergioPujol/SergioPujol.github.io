import React from 'react'

interface LanguageContainerProps {
    title: string
}

const LanguageContainer: React.FC<LanguageContainerProps> = ({
    title
}) => {
  return (
    <span className='rounded-full p-2 bg-accent/10 text-accent'>{title}</span>
  )
}

export default LanguageContainer