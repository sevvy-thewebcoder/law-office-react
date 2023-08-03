import MediaLinks from "../Components/MediaLinks"
import Button from "../Components/Button"
import { footerContent } from "../Constants/content"

export default function Footer () {

  const footerLinksElements = footerContent.footerLinks.map( ( data ) => (
    <div key={data.id} className="flex flex-row lg:flex-col justify-start gap-5">
      <h3 className="first:w-[80%] sm:first:w-[40%] lg:first:w-[100%] text-[1.1rem] font-semibold">{ data.title }</h3>
      <div className="w-full grid grid-cols-1 sm:w-[100%] lg:w-auto sm:grid-cols-2 lg:grid-cols-1 gap-3">
        {
          data.links.map( ( link ) => (
            <a key={ link.id } href={ link.linkPath } className="text-[0.9rem]">{ link.linkName }</a>
          ) )
        }
      </div>
    </div>
  ))

  return (
    <footer className="Footer relative bg-slate-600 text-white py-20">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10 px-clamp">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr] xl:grid-cols-[2fr_3fr] gap-20 sm:gap-10 md:gap-20">
          <div className="lg:row-span-2 w-[70%] sm:w-full mx-auto sm:mx-0">
            <img src={ footerContent.footerImage } className="object-cover aspect-[1/1] md:aspect-[9/8] lg:aspect-[9/14] xl:aspect-auto" alt="" />
          </div>
          <div className="max-w-[400px] flex flex-col justify-start gap-5">
            <h2 className="text-[2rem]">{ footerContent.cta.title }</h2>
            <p className="text-justify">{ footerContent.cta.text }</p>
            <Button link={ footerContent.cta.linkPath } text={ footerContent.cta.linkText } styles="text-[0.9rem] font-semibold underline underline-offset-8 uppercase mt-5" />
          </div>
          <div className="sm:col-span-full lg:col-start-2 grid grid-cols-1 lg:grid-cols-4 gap-8">
            { footerLinksElements }
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-between sm:items-center pt-10 border-t-2">
          <small className="text-center sm:text-start">{ footerContent.copyright }</small>
          <div className="flex flex-row justify-center sm:justify-between gap-2">
            <MediaLinks icon="ri-instagram-fill text-2xl" />
            <MediaLinks icon="ri-facebook-box-fill text-2xl" />
            <MediaLinks icon="ri-twitter-fill text-2xl" />
            <MediaLinks icon="ri-linkedin-box-fill text-2xl" />
          </div>
        </div>
      </div>
    </footer>
  )
}
