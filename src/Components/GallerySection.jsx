import { groupImages } from "../Constants/content"

export default function Gallery() {

    const galleryElements = groupImages.map( ( image ) => (
        <div key={image.id}>
            <img src={image.img} className="object-cover" alt="" />
        </div>
    ))

  return (
    <div className="flex flex-col sm:flex-row gap-10">
        {galleryElements}
    </div>
  )
}
