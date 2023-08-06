'use client';
import Button from '../components/Button'

const Contact = () => {

  const handleContact = () => {
    window.open('mailto:sergiopujolmartorell@gmail.com', '_blank')
  }

  return (
    <section id='contact' className='flex flex-col py-24 items-center gap-y-8'>
      <h1 className="text-bold text-3xl flex items-center">Contact</h1>
      <span className="font-semibold text-4xl text-accent">Get In Touch</span>
      <Button title='Say Hi!' onClickEvent={handleContact}/>
    </section>
  )
}

export default Contact