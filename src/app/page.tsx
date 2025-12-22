import { TechItem } from "#/components/tech-item"
import { techList } from "./tech-item-list"

export default function Home() {
  return (
    <div className="max-w-120 p-4 rounded-xl mx-auto flex flex-col items-center gap-8">
      <header className="flex flex-col gap-2 items-center ">
        <h1 className="font-bold text-3xl">محمدمهدی بهرامی</h1>

        <p className="font-bold text-blue-500">توسعه‌دهندهٔ اپلیکیشن‌های وب</p>

        <p className="">
          توسعه‌دهنده‌ای کنجکاو که در حال کاوش، آزمایش و یادگیری است...
        </p>
      </header>

      <main className="flex flex-col gap-8 items-center">
        <div className="flex gap-4 items-center flex-wrap">
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

        <p>contact</p>
      </main>

      <footer className="">
        <p>۱۴۰۵ - ساخته خودم</p>
      </footer>
    </div>
  )
}
