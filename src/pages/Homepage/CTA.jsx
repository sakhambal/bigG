import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <div className="w-full bg-1 text-2 flex justify-center items-center h-80">
      <div className="max-w-3xl flex justify-center items-center flex-col gap-4">
        <h3 className="font-fraunces text-5xl">Have a space in Mind?</h3>
        <p className="text-center">Tell us about your space, your requirements, and what you're imagining. We'll take it from there.</p>
        <Link className="border py-2 px-4 rounded-sm border-2 font-inter">Let's Discuss</Link>
      </div>
    </div>
  )
}

export default CTA