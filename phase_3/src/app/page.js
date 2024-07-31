import PageFooter from "./components/footer";
import NavigationBar from "./components/navigationBar";
import { Check, WbIncandescentRounded, PeopleAltRounded, StoreRounded, LocalShippingRounded, GradeRounded, DirectionsRunRounded } from "@mui/icons-material";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="">
      <NavigationBar></NavigationBar>
       
      <div className="flex flex-row bg-slate-50 justify-center font-light text-xs p-2 gap-10">
        <div className="flex flex-row gap-2 items-center">
          <LocalShippingRounded className="h-5 w-5 fill-slate-600"></LocalShippingRounded>
          <p>Next-day delivery</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <GradeRounded className="h-5 w-5 fill-slate-600"></GradeRounded>
          <p>Not Satisfied? Get a full refund</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <DirectionsRunRounded className="h-5 w-5 fill-slate-600"></DirectionsRunRounded>
          <p>Process everything online</p>
        </div>
      </div>

      <div className="relative bg-cover bg-center h-96 w-full" style={{ backgroundImage: "url('/Signages-cover.jpg')" }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent, white)", opacity: 1 }}></div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:fill-slate-600 hover:scale-110 transition duration-200 ease-in-out">
          <a href="./store" className="bg-black text-white rounded-full px-6 py-3 text-center font-semibold shadow-lg hover:bg-gray-800 transition-colors duration-300"> Shop Now </a>
        </div>
      </div>
        
      <div className="text-center mt-10">
        <h1 className="font-bold text-3xl">Make a <span className=" text-green-700 font-extrabold">great</span> impression.</h1>
        <p className="font-thin text-stone-800 text-md ml-32 mr-32 mt-5"> Give your brand a stand-out look with striking design and first-class custom signs and prints. Let Ingraph be your partner in your business needs in Calgary.</p>
        
        <div className="flex flex-row mt-5 text-left mr-16 ml-16 text-xs font-light justify-center gap-10">
          <div className="flex">
            <Check className="h-5 w-5 fill-green-700 mr-4"></Check>
            Full-service graphic design, signage, and printing
          </div>
          <div className="flex"> 
            <Check className="h-5 w-5 fill-green-700 mr-4"></Check>
            <span className="font-semibold">10 years</span> of industry experience
          </div>
          <div className="flex">
            <Check className="h-5 w-5 fill-green-700 mr-4"></Check>
            High-quality <span className="font-semibold">signs</span>, <span className="font-semibold">wraps</span>, and <span className="font-semibold"> various marketing materials</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-24 text-2xl font-semibold">
        <h2>Printing. Signs. Design.</h2>
      </div>

      <div className="overflow-x-scroll scroll-smooth flex flex-row gap-8 scrollbar-none p-10 justify-center items-center">
        <div className="flex-shrink-0 overflow-hidden h-96 w-80 rounded-3xl shadow-lg hover:scale-110 transition duration-300 ease-in-out">
          <Image src="/shirt-logo.jpg" alt="Shirt logo" layout="fill" className="object-cover" />
        </div>
        <div className="flex-shrink-0 overflow-hidden h-96 w-80 rounded-3xl shadow-lg hover:scale-110 transition duration-300 ease-in-out">
          <Image src="/truck-cover.jpg" alt="Truck cover" layout="fill" className="object-cover" />
        </div>
        <div className="flex-shrink-0 overflow-hidden h-96 w-80 rounded-3xl shadow-lg hover:scale-110 transition duration-300 ease-in-out"></div>
      </div>

      <div className="text-center text-2xl font-semibold w-screen p-10">
        <h1 className="">When it comes to quality, <span className="text-green-700 font-bold">we&apos;ve got you covered!</span></h1>
        <p className="text-sm font-thin mr-16 ml-16 mt-5">At Ingraph, we excel in delivering unparalleled quality, ensuring your project is professionally handled and tailored precisely to your 
          needs. Our dedication to prompt, customized, and hassle-free service places your satisfaction at the forefront. We understand the value 
          of satisfied customers, which is why we create inspiring customer experiences that drive your business growth.</p>
      </div>

      <div className="bg-black pr-5 pl-5 pb-5 pt-3">
        <div className="flex flex-row m-20 justify-between">
          <div className="flex flex-col items-center text-center text-white">
            <WbIncandescentRounded className="h-12 w-12 mb-5 fill-white"></WbIncandescentRounded> 
            <p className="">Bring ideas to life</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <PeopleAltRounded className="h-12 w-12 mb-5 fill-white"></PeopleAltRounded> 
            <p className="">Get noticed</p>
          </div>
          <div className="flex flex-col items-center text-center text-white">
            <StoreRounded className="h-12 w-12 fill-white"></StoreRounded> 
            <p className="">Establish your brand</p>
          </div>
        </div>
        <div className="shadow-lg h-96 m-5 rounded-3xl flex flex-row items-center">
          <div className="flex-1 text-left">
            <h1 className="pl-16 text-4xl font-bold text-white">
              Experience<br /> the wonders <br /> of <span className="text-green-700">top-quality</span> signs.
            </h1>
          </div>
        </div>
      </div>
      <PageFooter></PageFooter>
    </main>
  );
}
