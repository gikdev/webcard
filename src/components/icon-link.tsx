import type { Icon } from "@phosphor-icons/react"
import type { ReactNode } from "react"

interface IconLinkProps {
  Icon?: Icon
  icon?: ReactNode
  title: string
  href: string
}

export function IconLink({ href, Icon, title, icon }: IconLinkProps) {
  return (
    <a
      href={href}
      title={title}
      className="
        flex items-center gap-1 bg-base-03 px-6 py-3
        rounded-lg justify-center transition-all
        hover:scale-110 hover:text-white hover:bg-base-04
      "
    >
      {Icon && <Icon size={32} />}
      {icon}
    </a>
  )
}
