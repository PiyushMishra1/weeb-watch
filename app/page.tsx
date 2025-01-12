  import Header from "./Components/Header";
  import SearchBar from "./Components/SearchBar";
  import Card from "./Components/Card";
  import style from "./style.module.css";
  import CarouselDemo from "./Components/Carousel";

  export default function Home() {
    return (
      <>
        <Header />
        <main className="bg-[#0A0F2B] justify-between p-5 h-screen">
        <div className="grid md:grid-cols-2 ">
            <div className="bg-danger text-white">
              <h2 className="text-center">
                <i
                  className={`${style.font} font-thin text-[5vw] sm:text-[5vw] text-center`}
                >
                  Weeb Watch
                </i>
              </h2>
              <SearchBar />
              <div className="grid grid-row-3 mt-6 justify-center">
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className="text-white hidden md:flex justify-center items-center">
              <CarouselDemo />
            </div>
          </div>
        </main>
      </>
    );
  }
