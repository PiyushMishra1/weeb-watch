import Header from './Components/LoginPage/Header';
import SearchBar from './Components/LoginPage/SearchBar';
import Card from './Components/LoginPage/Card';
import style from './style.module.css';
export default function Home() {
  return (<>
    <Header />
    <main className="bg-[#0A0F2B] justify-between p-5">
      <div className="grid md:grid-cols-2 sm:grid-rows-2">
        <div className="bg-danger text-white">
          <h2 className='text-center'><i className={`${style.font} font-thin text-[10vw] sm:text-[5vw] text-center`}>Weeb Watch</i></h2>
          <SearchBar />

          <div className="grid grid-row-3 mt-6">
            <Card />
          </div>
        </div>
        <div className="bg-primary text-white">hello</div>
      </div>
    </main>
  </>
  );
}
