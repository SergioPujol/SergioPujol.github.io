import React from 'react'
import Anchor from '../components/Anchor'
import LinksNav from '../components/LinksNav'

const Footer = () => {
  return (
    <div className='flex flex-col p-6 items-center'>
        <LinksNav footer={true}/>
        <Anchor title='Designed & Build by Sergio Pujol Martorell' link='https://github.com/SergioPujol/Portfolio-Web'></Anchor>
    </div>
  )
}

export default Footer