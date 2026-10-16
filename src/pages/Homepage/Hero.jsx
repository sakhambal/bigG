import { Link } from "react-router-dom"




const Hero = () => {
  return (
    <div className="h-[120vh] w-full bg-2 bg-cover bg-center">
        <div  className="max-w-7xl mx-auto h-screen">
            <div className="flex flex-col  h-full gap-6 items-center justify-center mx-auto">
                <h1 className="text-3xl lg:text-5xl sm:text-2xl font-fraunces text-center font-semibold">A little Joy in <br /> Every Place</h1>
                <Link className="border py-2 px-4 rounded-sm  bg-2 font-inter">
                  View Projects
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero