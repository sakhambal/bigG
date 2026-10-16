import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-1 text-2 w-full h-[50vh]">
      <div className="mx-auto max-w-5xl flex justify-between items-center flex-col h-full py-10">
        <div className="flex justify-center items-center flex-col gap-8">
          <div className=" flex justify-center items-center flex-col gap-2">
            <h2 className="font-fraunces text-5xl font-semibold">Joy Design Studio</h2>
            <p className="font-inter font-extralight uppercase">Interior Design Studio · Mumbai</p>
          </div>
          <div className="w-full flex justify-between items-center px-8">
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Project</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div>
          <Link>Instagram · </Link>
          <Link>Email · </Link>
          <Link>Whatsapp</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer