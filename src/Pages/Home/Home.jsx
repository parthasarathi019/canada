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
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
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
        <hr className="border-[3.1px] border-black  border-t-0" />
        <div className="w-[90%] mx-auto relative">
          <button onClick={toggleMenu} className='flex bg-[#444] items-center px-[33px] py-[12px] text-[20px] text-white' >
            <div className="">MENU</div>
            <div><MaterialSymbolsKeyboardArrowDownRounded /></div>
          </button>

          {/* menu  */}
          <div className="">
            <div className={` ${showMenu ? "bg-[#444] text-white absolute top-14 left-0" : "hidden"}`}>
              <ul className="space-y-3">

                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Job and the workplace</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Job and the workplace</h1>
                      <a href="#find-job" className="cursor-pointer hover:underline">Find a job</a>
                      <a href="#training" className="cursor-pointer hover:underline">Training</a>
                      <a href="#hiring-managing" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                      <a href="#start-business" className="cursor-pointer hover:underline">Starting a business</a>
                      <a href="#workplace-standards" className="cursor-pointer hover:underline">Workplace standards</a>
                      <a href="#pensions-retirement" className="cursor-pointer hover:underline">Pensions and retirement</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#employment-insurance" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                      <a href="#records-employment" className="cursor-pointer hover:underline">View your Records of Employment</a>
                      <a href="#social-insurance" className="cursor-pointer hover:underline">Apply for a Social Insurance Number (SIN)</a>
                      <a href="#foreign-worker" className="cursor-pointer hover:underline">Hire a temporary foreign worker</a>
                      <a href="#skilled-worker" className="cursor-pointer hover:underline">Immigrate as a skilled worker</a>
                    </div>
                  </div>
                </li>


                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Immigration and citizenship</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Immigration and citizenship</h1>
                      <a href="#my-application" className="cursor-pointer hover:underline">My application</a>
                      <a href="#visit" className="cursor-pointer hover:underline">Visit</a>
                      <a href="#immigrate" className="cursor-pointer hover:underline">Immigrate</a>
                      <a href="#work" className="cursor-pointer hover:underline">Work</a>
                      <a href="#study" className="cursor-pointer hover:underline">Study</a>
                      <a href="#citizenship" className="cursor-pointer hover:underline">Citizenship</a>
                      <a href="#new-immigrants" className="cursor-pointer hover:underline">New immigrants</a>
                      <a href="#canadians" className="cursor-pointer hover:underline">Canadians</a>
                      <a href="#refugees-asylum" className="cursor-pointer hover:underline">Refugees and asylum</a>
                      <a href="#enforcement-violations" className="cursor-pointer hover:underline">Enforcement and violations</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#most-requested" className="cursor-pointer hover:underline">Most requested</a>
                      <a href="#sign-in" className="cursor-pointer hover:underline">Sign in or create an account to apply online</a>
                      <a href="#check-status" className="cursor-pointer hover:underline">Check your application status</a>
                      <a href="#processing-times" className="cursor-pointer hover:underline">Check application processing times</a>
                      <a href="#application-form" className="cursor-pointer hover:underline">Find an application form</a>
                      <a href="#pay-fees" className="cursor-pointer hover:underline">Pay your fees</a>
                      <a href="#eta-visa" className="cursor-pointer hover:underline">Find out if you need an eTA or a visa to visit Canada</a>
                      <a href="#help-centre" className="cursor-pointer hover:underline">Have questions? Find answers in the Help Centre</a>
                    </div>
                  </div>
                </li>

                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Travel and tourism</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Travel and tourism</h1>
                      <a href="#travel-advice" className="cursor-pointer hover:underline">Travel advice and advisories</a>
                      <a href="#covid19-travel" className="cursor-pointer hover:underline">COVID-19: Travel, testing and borders</a>
                      <a href="#visit-canada" className="cursor-pointer hover:underline">Visit Canada</a>
                      <a href="#travel-outside" className="cursor-pointer hover:underline">Travel outside Canada</a>
                      <a href="#air-travel" className="cursor-pointer hover:underline">Air travel</a>
                      <a href="#return-canada" className="cursor-pointer hover:underline">Return to Canada</a>
                      <a href="#canadian-passports" className="cursor-pointer hover:underline">Canadian passports and travel documents</a>
                      <a href="#canadian-attractions" className="cursor-pointer hover:underline">Canadian attractions, events and experiences</a>
                      <a href="#assistance-outside" className="cursor-pointer hover:underline">Assistance outside Canada</a>
                      <a href="#stay-connected" className="cursor-pointer hover:underline">Stay connected</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#emergency-assistance" className="cursor-pointer hover:underline">Emergency assistance abroad</a>
                      <a href="#visa-requirements" className="cursor-pointer hover:underline">Find out if you need a visa to travel to Canada</a>
                      <a href="#apply-eta" className="cursor-pointer hover:underline">Apply for an eTA</a>
                      <a href="#apply-nexus" className="cursor-pointer hover:underline">Apply for NEXUS</a>
                      <a href="#register-canadian-abroad" className="cursor-pointer hover:underline">Register as a Canadian abroad</a>
                      <a href="#travel-insurance" className="cursor-pointer hover:underline">Travel insurance</a>
                    </div>
                  </div>
                </li>

                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Business and industry</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Business and industry</h1>
                      <a href="#start-business" className="cursor-pointer hover:underline">Starting a business</a>
                      <a href="#business-grants" className="cursor-pointer hover:underline">Business grants and financing</a>
                      <a href="#business-taxes" className="cursor-pointer hover:underline">Business taxes</a>
                      <a href="#federal-corporations" className="cursor-pointer hover:underline">Federal corporations</a>
                      <a href="#hiring-employees" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                      <a href="#international-trade" className="cursor-pointer hover:underline">International trade and investment</a>
                      <a href="#permits-licences" className="cursor-pointer hover:underline">Permits, licences and regulations</a>
                      <a href="#business-government" className="cursor-pointer hover:underline">Doing business with government</a>
                      <a href="#r-and-d" className="cursor-pointer hover:underline">R&D and innovation</a>
                      <a href="#research-intelligence" className="cursor-pointer hover:underline">Research and business intelligence</a>
                      <a href="#intellectual-property" className="cursor-pointer hover:underline">Intellectual property and copyright</a>
                      <a href="#maintaining-business" className="cursor-pointer hover:underline">Maintaining your business</a>
                      <a href="#protecting-business" className="cursor-pointer hover:underline">Protecting your business</a>
                      <a href="#insolvency-business" className="cursor-pointer hover:underline">Insolvency for business</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#find-corporation" className="cursor-pointer hover:underline">Find a corporation</a>
                      <a href="#report-imported-goods" className="cursor-pointer hover:underline">Report your imported goods</a>
                      <a href="#search-trademarks" className="cursor-pointer hover:underline">Search for trademarks</a>
                      <a href="#review-tariffs" className="cursor-pointer hover:underline">Review custom tariffs for importing goods</a>
                      <a href="#find-patent" className="cursor-pointer hover:underline">Find a patent</a>
                      <a href="#import-export-canada" className="cursor-pointer hover:underline">Import and export from Canada</a>
                      <a href="#name-business" className="cursor-pointer hover:underline">Name a business</a>
                      <a href="#make-changes-corporation" className="cursor-pointer hover:underline">Make changes to your corporation (Online Filing Centre)</a>
                    </div>
                  </div>
                </li>
                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Benefits</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Benefits</h1>
                      <a href="#ei-benefits-leave" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                      <a href="#family-caregiving-benefits" className="cursor-pointer hover:underline">Family and caregiving benefits</a>
                      <a href="#public-pensions" className="cursor-pointer hover:underline">Public pensions</a>
                      <a href="#student-aid-education" className="cursor-pointer hover:underline">Student aid and education planning</a>
                      <a href="#housing-benefits" className="cursor-pointer hover:underline">Housing benefits</a>
                      <a href="#disability-benefits" className="cursor-pointer hover:underline">Disability benefits</a>
                      <a href="#benefits-audience" className="cursor-pointer hover:underline">Benefits by audience</a>
                      <a href="#benefits-payment-dates" className="cursor-pointer hover:underline">Benefits payment dates</a>
                      <a href="#benefits-finder" className="cursor-pointer hover:underline">Benefits finder</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#notify-government-death" className="cursor-pointer hover:underline">Notify the government of a death</a>
                      <a href="#apply-ei" className="cursor-pointer hover:underline">Apply for Employment Insurance</a>
                      <a href="#apply-student-loans" className="cursor-pointer hover:underline">Apply for student loans and grants</a>
                      <a href="#sign-in-canada-account" className="cursor-pointer hover:underline">Sign in to a Government of Canada online account</a>
                      <a href="#sign-up-direct-deposit" className="cursor-pointer hover:underline">Sign up for direct deposit</a>
                      <a href="#submit-ei-report" className="cursor-pointer hover:underline">Submit your EI report</a>
                      <a href="#child-family-benefits-calculators" className="cursor-pointer hover:underline">Child and family benefits calculators</a>
                    </div>
                  </div>
                </li>
                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Health</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Health</h1>
                      <a href="#food-nutrition" className="cursor-pointer hover:underline">Food and nutrition</a>
                      <a href="#diseases-conditions" className="cursor-pointer hover:underline">Diseases and conditions</a>
                      <a href="#vaccines-immunization" className="cursor-pointer hover:underline">Vaccines and immunization</a>
                      <a href="#drug-health-products" className="cursor-pointer hover:underline">Drug and health products</a>
                      <a href="#product-safety" className="cursor-pointer hover:underline">Product safety</a>
                      <a href="#health-risks-safety" className="cursor-pointer hover:underline">Health risks and safety</a>

                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#healthy-living" className="cursor-pointer hover:underline">Healthy living</a>
                      <a href="#indigenous-health" className="cursor-pointer hover:underline">Indigenous health</a>
                      <a href="#health-system-services" className="cursor-pointer hover:underline">Health system and services</a>
                      <a href="#science-research-data" className="cursor-pointer hover:underline">Science, research and data</a>
                      <a href="#licensed-cannabis" className="cursor-pointer hover:underline">Licensed cultivators, processors and seller of cannabis</a>
                      <a href="#food-recalls-alerts" className="cursor-pointer hover:underline">Food and product recalls and safety alerts</a>
                      <a href="#canada-food-guide" className="cursor-pointer hover:underline">Canada's food guide</a>
                    </div>
                  </div>
                </li>
                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Taxes</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Taxes</h1>
                      <a href="#income-tax" className="cursor-pointer hover:underline">Income tax</a>
                      <a href="#gst-hst" className="cursor-pointer hover:underline">GST/HST</a>
                      <a href="#payroll" className="cursor-pointer hover:underline">Payroll</a>
                      <a href="#business-number" className="cursor-pointer hover:underline">Business number</a>
                      <a href="#savings-pension-plans" className="cursor-pointer hover:underline">Savings and pension plans</a>
                      <a href="#tax-credits-benefits" className="cursor-pointer hover:underline">Tax credits and benefits for individuals</a>
                      <a href="#excise-taxes" className="cursor-pointer hover:underline">Excise taxes, duties, and levies</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                      <a href="#charities-giving" className="cursor-pointer hover:underline">Charities and giving</a>
                      <a href="#my-account" className="cursor-pointer hover:underline">My Account</a>
                      <a href="#my-business-account" className="cursor-pointer hover:underline">My Business Account</a>
                      <a href="#represent-client" className="cursor-pointer hover:underline">Represent a Client</a>
                      <a href="#file-gst-hst-return" className="cursor-pointer hover:underline">File a GST/HST return (NETFILE)</a>
                      <a href="#make-payment-cra" className="cursor-pointer hover:underline">Make a payment to the Canada Revenue Agency</a>
                      <a href="#find-benefit-payment-date" className="cursor-pointer hover:underline">Find the next benefit payment date</a>
                    </div>
                  </div>
                </li>
                <li className="relative group p-3">
                  <span className="cursor-pointer hover:bg-white text-[22px] hover:text-black py-2 pr-[96px] pl-[20px]">Environment and natural resources</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200">
                    <div className="flex items-center flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Environment and natural resources</h1>
                      <a href="#weather-climate-hazards" className="cursor-pointer hover:underline">Weather, climate and hazards</a>
                      <a href="#energy" className="cursor-pointer hover:underline">Energy</a>
                      <a href="#natural-resources" className="cursor-pointer hover:underline">Natural resources</a>
                      <a href="#agriculture-environment" className="cursor-pointer hover:underline">Agriculture and the environment</a>
                      <a href="#fisheries" className="cursor-pointer hover:underline">Fisheries</a>
                      <a href="#wildlife-plants-species" className="cursor-pointer hover:underline">Wildlife, plants and species</a>
                      <a href="#pollution-waste-management" className="cursor-pointer hover:underline">Pollution and waste management</a>
                      <a href="#environmental-conservation-protection" className="cursor-pointer hover:underline">Environmental conservation and protection</a>
                    </div>
                    <div className="flex items-center flex-col gap-4">
                    <a href="#local-weather-forecast" className="cursor-pointer hover:underline">Local weather forecast</a>
                      <a href="#fuel-efficient-vehicles" className="cursor-pointer hover:underline">Fuel-efficient vehicles</a>
                      <a href="#home-energy-efficiency" className="cursor-pointer hover:underline">Home energy efficiency</a>
                      <a href="#species-at-risk" className="cursor-pointer hover:underline">Species at risk</a>
                      <a href="#prepare-severe-weather" className="cursor-pointer hover:underline">Prepare for severe weather</a>
                    </div>
                  </div>
                </li>


              </ul>
            </div>
          </div>





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

      {/* <img className='mt-4 shadow-lg  w-full cursor-pointer' src={moduleName2} alt="" /> */}

      <footer className='mt-[100px]'>
        <div className='flex justify-between gap-x-[7px] items-center px-[54px] pb-[43px]'>
          <p>Date modified: 2023-11-23</p>
          <button className='bg-[#eaebed] px-[55px] py-[10px] rounded-[4px]'>Share this page</button>
        </div>
        <div className='bg-[#33465c] py-[24px] px-[54px]'>
          <p className='text-[27px]     text-white'>Immigration and citizenship</p>
          <div className='flex gap-x-[398px] pt-[14px] '>
            <p className='text-[16px]   text-white'>Help Centre</p>
            <p className='text-[16px]   text-white'>Contact us</p>
          </div>
        </div>
        <div className='bg-[#26374a] px-[54px] py-[20px]'>
          <p className='text-[27px]     text-white'>Government of Canada</p>
          <section className='flex gap-x-[230px]'>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>All contacts</p>
              <p className='text-[16px] text-white'>Jobs</p>
              <p className='text-[16px] text-white'>Immigration and citizenship</p>
              <p className='text-[16px] text-white'>Travel and tourism</p>
              <p className='text-[16px] text-white'>Business</p>
              <p className='text-[16px] text-white'>Benefits</p>
              <p className='text-[16px] text-white'>Health</p>

            </div>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>Departments and agencies</p>
              <p className='text-[16px] text-white'>Taxes</p>
              <p className='text-[16px] text-white'>Environment and natural resources</p>
              <p className='text-[16px] text-white'>National security and defence</p>
              <p className='text-[16px] text-white'>Culture, history and sport</p>
              <p className='text-[16px] text-white'>Policing, justice and emergencies</p>
              <p className='text-[16px] text-white'>Transport and infrastructure</p>

            </div>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>About government</p>
              <p className='text-[16px] text-white'>Canada and the world</p>
              <p className='text-[16px] text-white'>Money and finance</p>
              <p className='text-[16px] text-white'>Science and innovation</p>
              <p className='text-[16px] text-white'>Indigenous peoples</p>
              <p className='text-[16px] text-white'>Veterans and military</p>
              <p className='text-[16px] text-white'>Youth</p>

            </div>
          </section>
        </div>
        <div className='flex justify-between px-[54px] items-center'>
          <div className='flex gap-x-[64px] text-[15px]'>
            <p>Social media</p>
            <p>Mobile applications</p>
            <p>About Canada.ca</p>
            <p>Terms and conditions</p>
            <p>Privacy</p>
          </div>
          <div className='text-[64px] font-semibold font-serif'>
            Canada
          </div>
        </div>
        <div>

        </div>
      </footer>
    </div>
  );
};


export function IcBaselineDownload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="black" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"></path></svg>
  )
}


export function MaterialSymbolsKeyboardArrowDownRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"></path></svg>
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

