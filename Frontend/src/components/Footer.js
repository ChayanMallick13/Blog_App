import React from 'react'

function Footer() {
    return (
        <div className='w-[100vw] bg-[#02042f] overflow-hidden mt-10 text-slate-300 flex justify-around items-center px-10 lg:flex-row flex-col 
    bottom-0  overflow-x-hidden min-h-max 
    '>

            <p className='lg:text-[80px] md:text-[50px] text-[30px] -top-3 md:-top-5 uppercase -pt-5 font-extrabold relative lg:-top-9
            text-slate-300
            '>Blog App</p>



            <div className='flex flex-col items-center text-center gap-y-3'>
                <p className='text-lg'>Made By - </p>
                <div className='flex gap-x-10 lg:text-xl font-bold underline cursor-pointer opacity-70 italic'>
                    <a href='https://www.linkedin.com/in/chayan-mallick-212664290' target='_blank' rel="noopener noreferrer">Chayan Mallick</a>
                    <a href='https://www.linkedin.com/in/aditya-dev-326138289/' target='_blank' rel="noopener noreferrer">Aditya Dev</a>
                </div>
            </div>

        </div>
    )
}

export default Footer;
