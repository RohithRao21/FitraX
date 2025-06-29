import React from 'react'

export default function SectionWrapper(props) {
  const {header, title, children, id} = props;
  
    return (
    <section id={id} className='min-h-screen flex flex-col py-5 gap-10'>
        <div className='bg-slate-950 py-10 flex flex-col 
            gap-4 items-center justify-center p-4'>
            <p className='uppercase font-medium'>{header}</p>
            <h2 className='text-3xl font-semibold
            sm:text-4xl md:text-5xl lg:text-6xl'>{title[0]}
            <span className='uppercase text-yellow-500'>{title[1]}</span>
            {title[2]}</h2>
        </div>
        <div className='max-w-[800px] mx-auto flex 
        flex-col gap-10 w-full p-4'>
            {children}  
        </div>
    </section>
  )
}