import { heroImg } from "../Constants/content"

export default function HeroSection() {
  return (
    <div className="Hero-Section flex w-[100%]">
        <img src={heroImg} className="object-cover" alt="" />
    </div>
  )
}
