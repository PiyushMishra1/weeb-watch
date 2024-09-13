import Image from "next/image";
import img from "@/public/Images/thumb.png";

export default function Card() {
  return (
    <>
      <div className="card flex h-[89px] my-1">
        <div className="card-img bg-black w-[169px] rounded-s-[8px]">
          <Image src={img} alt="thumbnail" style={{ height: '100%' }} />
        </div>
        <div className="card-desc bg-[#cecdcd24] w-[243px] rounded-e-[8px] py-1 px-3">
          <h3 className="text-white">hel</h3>
          <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iure qui ipsa.</p>
        </div>
      </div>
    </>
  )
}