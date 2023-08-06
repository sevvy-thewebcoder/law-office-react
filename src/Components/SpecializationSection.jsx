import Button from "./Button"
import { specializationSectionText } from "../Constants/content"

export default function Specials() {

  const specializationElements = specializationSectionText.textContent.map( ( data ) => (
    <div key={data.id} className={`flex flex-col justify-start gap-5`}>
      <h4 className="font-vollkorn text-titleTxtClamp">{ data.title }</h4>
      <p className=" font-montserrat leading-[2] text-justify">{ data.paragraph }</p>
      <Button link={data.linkPath} text={data.linkTxt} styles="text-[0.9rem] font-semibold underline underline-offset-8 uppercase mt-auto" />
    </div>
  ))

  return (
    <div className="w-full flex flex-col gap-8 py-20">
      <h3 className="font-vollkorn text-specializationTxtClamp">{ specializationSectionText.heading }</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-x-10 lg:gap-20">{ specializationElements }</div>
    </div>
  )
}
