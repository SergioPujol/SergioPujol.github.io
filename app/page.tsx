import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full bg-bg-main flex">
      <div className='w-1/2 flex flex-col justify-center p-8'>
        <h2 className='text-accent text-2xl pb-2'>About me</h2>
        <div className='text-white text-sm'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, delectus rem, distinctio culpa assumenda, obcaecati voluptate accusantium voluptas a et nam facere commodi quos consequuntur maxime! Minus nesciunt deserunt assumenda.</p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt illo odio eveniet voluptate, tempore ducimus quae expedita nulla, enim temporibus, deleniti accusantium consequuntur suscipit ratione sed? Ratione officiis eius quibusdam.</p>
        </div>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center'>
        <Image
          width={400}
          height={400}
          src={'/vercel.svg'}
          alt='placeholder'
        />
      </div>
    </main>
  )
}
