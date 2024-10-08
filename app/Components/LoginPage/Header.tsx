import style from './style.module.css';
export default function Header() {
  return (
    <>
      <nav className={`${style.font} bg-[#0A0F2B] text-[#4A62EA] h-[90px]`} id='nav'>
        <div className="max-w-screen-xl h-full flex flex-wrap items-center self-center justify-between align-middle mx-[140px] p-4 text-[14px]">
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto me-auto" id="navbar-default">
            <ul className="text-[#4A62EA] font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li className='pe-10'>
                <a href="#" className="block py-4 px-10 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
              </li>
              <li className='pe-10'>
                <a href="#" className="block py-2 px-10 roundedmd:hover:bg-transparent md:border-0 md:p-0">Movies</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-10 rounded md:hover:bg-transparent md:border-0 md:p-0">TVSeries</a>
              </li>
            </ul>
          </div>
          <div>
            <button className='bg-transparent rounded-sm px-10'>Login</button>
            <button className='bg-transparent rounded-sm px-10'>SignUp</button>
          </div>
        </div>
      </nav>
    </>
  )
}