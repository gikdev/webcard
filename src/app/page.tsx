import {
  CopyrightIcon,
  EnvelopeIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { EitaaIcon } from "#/components/eitaa-icon"
import { IconLink } from "#/components/icon-link"
import { TechItem } from "#/components/tech-item"
import { techList } from "./tech-item-list"

export default function Home() {
  return (
    <div
      className="max-w-120 p-8 mx-auto flex flex-col items-center gap-4 text-center flex-1 min-h-dvh"
      dir="rtl"
    >
      <img
        src="/me.png"
        alt="عکس محمدمهدی بهرامی"
        className="rounded-lg max-w-32"
      />

      <h1 className="font-black text-3xl text-base-12">محمدمهدی بهرامی</h1>

      <p className="font-bold text-primary-09">برنامه‌نویس وب‌اپ 💻</p>

      <p>یه برنامه‌نویس کنجاو در حال کاوش، آزمایش و یادگیری 📚</p>

      <TechItems />

      <ContactItems />

      <Copyright />
    </div>
  )
}

const TechItems = () => (
  <div className="flex gap-2 justify-center flex-wrap">
    {techList.map(tech => (
      <TechItem
        key={tech.id}
        imageAlt={tech.imageAlt}
        imageSrc={tech.imageSrc}
        title={tech.title}
        url={tech.url}
      />
    ))}
  </div>
)

const ContactItems = () => (
  <div className="flex justify-center flex-wrap gap-2" dir="ltr">
    <IconLink
      Icon={EnvelopeIcon}
      href="mailto:wd.bahrami@gmail.com"
      title="wd.bahrami@gmail.com"
    />

    <IconLink
      Icon={GithubLogoIcon}
      href="https://github.com/gikdev"
      title="@gikdev"
    />

    <IconLink
      icon={<EitaaIcon />}
      href="https://eitaa.com/webdev_bahrami"
      title="@webdev_bahrami"
    />
  </div>
)

const Copyright = () => (
  <p className="flex items-center gap-1 mt-auto">
    <span>۱۴۰۵</span>
    <CopyrightIcon />
  </p>
)
