// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';
import moduleName from '../../assets/header.png'
import moduleName2 from '../../assets/footer.png'

const App = () => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [noResult, setNoResult] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/result/${searchId}`);
      setNoResult(false);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
      setNoResult(true);
      setSearchResult(null);
    }
  };

  return (
    <div>

      {/* <img className='mb-11 mt-8 cursor-pointer' src={moduleName} alt="" /> */}
      <div className='flex justify-between items-center px-4 my-8 '>
        <div className=''><img className='w-[450px]' src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="" /></div>
        <div><input placeholder='Search IRCC' className="w-full bg-slate-50  border-[1.8px] border-gray-800 h-[2em] text-[1em] md:h-[2em] text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} /></div>
      </div>
      <div>
        <hr className='border-[3.1px] border-black  border-t-0' />
        <div className='w-[90%] mx-auto'>
          <button className='px-[33px] py-[12px] text-[20px] text-white bg-[#26374a]'>MENU</button>
        </div>
      </div>
      <div className='md:px-[60px]'>
        <p className='text-[#333333] font-semibold text-[39px]'>How to check your application status</p>
        <div className='py-1'><hr className='border border-red-900  border-t-0' /></div>
        <div className='flex justify-between items-center '>
          <p className='text-[#333333] text-[23px]'>Select your application type to find out how to check your application status.</p>
          <button className='px-[16px] py-[10px] rounded-md bg-red-700 text-white'>Need Help?</button>
        </div>
      </div>
      <div className='mt-[1em] md:px-[60px]'>
        <p className='text-[#333333] font-bold text-[17px]'><span className='text-[20px] text-red-700'>*</span> please type your ID in search box <span className=' text-red-700'> (required)</span></p>
      </div>
      <div>
        <div className='w-[91%] mx-auto'>
          <div className='flex gap-x-3'>
            <input placeholder='type your ID' className="w-full bg-slate-50  border-[1.8px] border-gray-800 rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
            <button className='text-black style' onClick={handleSearch}>Search</button>
          </div>
          <div className='flex gap-x-3 mt-4'>
            <button className='px-[16px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>See Status</button>
            <button className='px-[16px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>See work Parmet</button>
            <button className='px-[16px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>See Application</button>
            <button className='px-[16px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>See Docs 4</button>
          </div>
        </div>

      </div>

      {searchResult && !noResult ? (
        <SearchResult user={searchResult} />
      ) : (
        noResult && <h4>--- No Result Found ---</h4>
      )}

      <img className='mt-4 shadow-lg  w-full cursor-pointer' src={moduleName2} alt="" />
    </div>
  );
};


export function IcBaselineDownload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="black" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"></path></svg>
  )
}

const SearchResult = ({ user }) => {
  return (
    <section className='border-2 border-gray-600 rounded-[26px] my-3 mx-2'>
      <div className='my-4 mx-2'>
        <div className='flex justify-center items-center gap-x-4 px-6'>
          <div>
            <img className='w-[205px] h-[245px] rounded-[10px]' src={user.P_url} alt="" srcSet="" />
          </div>
          <div>
            <p><span className='text-[15px]'>Canditate Name:</span>  <span className='text-[19px] font-bold '>{user.name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Fathers Name:</span> <span className='text-[19px] font-bold '>{user.F_name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Mothers Name:</span> <span className='text-[19px] font-bold '>{user.M_name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Permanant Address:</span> <span className='text-[19px] font-bold '> {user.Po_address}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Nationality:</span> <span className='text-[19px] font-bold '>{user.nationality}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Religion:</span> <span className='text-[19px] font-bold '>{user.Religion}</span></p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-4'>
          <div className={`${!user.Doc_1_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_1_Nm && user.Doc_1_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_1_PC && user.Doc_1_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_2_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_2_Nm && user.Doc_2_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_2_PC && user.Doc_2_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_3_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_3_Nm && user.Doc_3_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_3_PC && user.Doc_3_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_4_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_4_Nm && user.Doc_4_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_4_PC && user.Doc_4_PC} alt="Please Wait Few Moment" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

