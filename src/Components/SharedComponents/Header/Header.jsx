import React from 'react'

const Header = () => {
  return (
    <>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Header Section 😃</div>



      <section>
        <div className='text-center text-green-500 font-bold text-[52px]'>
          --- Welcome to Document Finder ---
        </div>
        <div className='mt-[6em] flex justify-center items-center'>
          <IcBaselineDownload />
          <p className='text-center text-green-500 font-semibold text-[33px]'>please type your ID in search box</p>
          <IcBaselineDownload />
        </div>

        <form className="flex justify-center items-center space-x-3 mt-4">
          <div className='w-[80%]'>
            <input id="ssearch" type="search" placeholder="Type your ID number" className="w-full bg-slate-50  border-[1.8px] border-[#14a800e3] rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" />
          </div>
          <div className=''> <button>
            <a className='text-black'>search</a>
          </button></div>
        </form>
      </section>
    </>
  )
}
export function IcBaselineDownload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="black" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"></path></svg>
  )
}
export default Header