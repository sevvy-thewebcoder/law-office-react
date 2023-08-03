import { aboutSectionText } from "../Constants/content"

export default function AboutSection () {

    const paragraphElements = aboutSectionText.textContent.map( ( data ) => (
        <div key={data.id} className="flex flex-col gap-6">
            {
                data.paragraph.map( ( txt ) => (
                    <p key={txt.id} className="text-justify" >
                        {txt.text}
                    </p>
                ))
            }
       </div>
    ))

  return (
    <div className="flex flex-col gap-8 py-20">
        <h2 className="text-txtClamp font-bold">{ aboutSectionText.sectionHeading }</h2>
        <div className="flex flex-col sm:flex-row gap-10">{ paragraphElements }</div>
    </div>
  )
}
