import hyundai from "../assets/clients/hyundai.svg"
import naver from "../assets/clients/naver.svg"
import make from "../assets/clients/make.svg"
import kia from "../assets/clients/kia.svg"
import pieconsulting from "../assets/clients/pieconsulting.svg"
import mpsystem from "../assets/clients/mpsystem.svg"

export default function Clients() {
  return (
    <section className="container pt-40 mx-auto">
      <div className="flex flex-col w-full text-left lg:text-center">
        <h1 className="text-2xl font-semibold text-blue-550 title-font">
          Some cool companies&nbsp;
          <br className="md:hidden" />
          I've worked with.
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-16 my-16 text-center sm:md:grid-cols-3 md:grid-cols-3">
        <div className="flex items-center justify-center ">
          <img src={hyundai} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={mpsystem} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={naver} alt="logo" className="block object-contain h-12" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={make} alt="logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={kia} alt="logo" className="block object-contain h-16" />
        </div>
        <div className="flex items-center justify-center ">
          <img src={pieconsulting} alt="logo" className="block object-contain h-16" />
        </div>
      </div>
    </section>
  )
}
