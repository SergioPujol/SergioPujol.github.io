import React from 'react'

interface AnchorProps {
    link: string
    title: string
}

const Anchor: React.FC<AnchorProps> = ({ link, title }) => {
  return (
    <a href={link} target='_blank' className="text-accent anchor">
        {title}
    </a>
  )
}

export default Anchor