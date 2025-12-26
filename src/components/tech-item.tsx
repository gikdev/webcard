export interface TechListItem {
  id: string
  imageSrc: string
  imageAlt: string
  title: string
  url: string
}

interface TechItemProps {
  imageSrc: string
  imageAlt: string
  title: string
  url: string
}

export function TechItem({ imageAlt, imageSrc, title, url }: TechItemProps) {
  return (
    <a
      href={url}
      target="_blank"
      title={title}
      className="flex items-center justify-center bg-base-03 p-2 rounded-md transition-all hover:scale-110 hover:text-white hover:bg-base-04"
    >
      <img src={imageSrc} alt={imageAlt} className="h-12" />
    </a>
  )
}
