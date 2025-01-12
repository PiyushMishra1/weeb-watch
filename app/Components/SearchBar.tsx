import style from './style.module.css';
export default function SearchBar() {
  return (
    <>
      <div className="flex justify-center mt-[24px] bg-[#666981] opacity-[41%]  w-fit rounded-full mx-auto">
        <input type="text" className={`${style.search} ${style.font} h-[48px] bg-transparent text-white ps-5 md:w-[23vw] w-[60vw] rounded-s-full  placeholder:text-sm placeholder:text-white`} placeholder="Search..." />
        <button className="bg-[#010b42] w-[60px] h-[48px] rounded-e-full text-white">search</button>
      </div>
    </>
  )
}