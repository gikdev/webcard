import Head from "next/head"

export const DefaultHead = () => (
  <Head>
    <title>محمدمهدی بهرامی</title>
    <meta
      name="description"
      content="وب‌سایت شخصی محمدمهدی بهرامی، برنامه‌نویس وب‌اپ"
    />
    <meta name="author" content="محمدمهدی بهرامی" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Open Graph */}
    <meta property="og:title" content="محمدمهدی بهرامی" />
    <meta
      property="og:description"
      content="وب‌سایت شخصی محمدمهدی بهرامی، برنامه‌نویس وب‌اپ"
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://bahrami85.ir/" />
    <meta property="og:image" content="https://bahrami85.ir/me.png" />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="محمدمهدی بهرامی" />
    <meta
      name="twitter:description"
      content="وب‌سایت شخصی محمدمهدی بهرامی، برنامه‌نویس وب‌اپ"
    />
    <meta name="twitter:image" content="https://bahrami85.ir/me.png" />

    {/* Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "محمدمهدی بهرامی",
          url: "https://bahrami85.ir/",
          sameAs: [
            "https://github.com/gikdev",
            "https://eitaa.com/webdev_bahrami",
          ],
          jobTitle: "برنامه‌نویس وب اپ",
        }),
      }}
    />
  </Head>
)
