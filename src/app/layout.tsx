import "./globals.css"
import type { Metadata } from "next"
import type { PropsWithChildren } from "react"

export const metadata: Metadata = {
  title: "محمدمهدی بهرامی",
  description: "سایت شخصی محمدمهدی بهرامی",
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl" className="h-full bg-base-02 text-base-11">
      <body className="h-full flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}
