import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[15vh] bg-[#02042fd8] mt-10 text-slate-300 flex flex-col justify-between px-16 py-5'>
        <div className='flex justify-around items-center'>

            <p className='text-7xl opacity-30'>Blog App</p>

            <div className='flex flex-col items-center text-center gap-y-3'>
                <p className='text-xl italic'>Made By - </p>
                <div className='flex gap-x-10 text-2xl font-bold underline cursor-pointer'>
                    <p>Chayan Mallick</p>
                    <p>Aditya Dev</p>
                </div>
            </div>

        </div>

        <div className='w-full bg-white h-[3px] rounded-lg'/>
    </div>
  )
}

export default Footer;
