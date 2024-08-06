import { SignupFormDemo } from "@/components/signupForm"


function page() {
  return (
    <div className="min-hsceen bg-black py-12  pt-36 mx-4">
        <h1 className="text-4xl md:text-6xl  text-white font-bold font-sans text-center">Contact Us</h1>
        <SignupFormDemo />
    </div>
  )
}

export default page