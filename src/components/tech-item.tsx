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
      className="grayscale-100 hover:grayscale-0 transition-all flex items-center justify-center"
    >
      <img src={imageSrc} alt={imageAlt} className="h-16" />
    </a>
  )
}
