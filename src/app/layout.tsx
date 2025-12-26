import type { PropsWithChildren } from "react"
import { lahzeh } from "#/assets/fonts/Lahzen"
import "./globals.css"
import { DefaultHead } from "./default-head"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "محمدمهدی بهرامی",
  description: "وب‌سایت شخصی محمدمهدی بهرامی، برنامه‌نویس وب‌اپ",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`min-h-dvh bg-base-01 leading-loose text-base-11 ${lahzeh.className}`}
    >
      <DefaultHead />

      <body className="min-h-dvh flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}
