import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://alfat.site";

export const metadata: Metadata = {
  title: "Miftah Alfathul Rizky — Full Stack Developer & QA Engineer",
  description:
    "Building enterprise-grade web systems end-to-end — from database architecture to pixel-perfect UI. 2+ years delivering across 6+ client products at Hepytech.",
  keywords: [
    "Full Stack Developer",
    "QA Engineer",
    "Next.js",
    "TypeScript",
    "Laravel",
    "React",
    "Playwright",
    "Frontend Developer",
    "Bandung",
    "Indonesia",
    "Miftah Alfathul Rizky",
  ],
  authors: [{ name: "Miftah Alfathul Rizky" }],
  creator: "Miftah Alfathul Rizky",
  metadataBase: new URL(siteUrl),
  verification: {
    google: "googlea46e0cda0e35c731",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Miftah Alfathul Rizky — Full Stack Developer & QA Engineer",
    description:
      "Building enterprise-grade web systems end-to-end — from database architecture to pixel-perfect UI. 2+ years delivering across 6+ client products.",
    siteName: "Alfat Portfolio",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Miftah Alfathul Rizky — Full Stack Developer & QA Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miftah Alfathul Rizky — Full Stack Developer & QA Engineer",
    description:
      "Building enterprise-grade web systems end-to-end — from database architecture to pixel-perfect UI.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Miftah Alfathul Rizky",
    jobTitle: "Full Stack Developer & QA Engineer",
    description:
      "Building enterprise-grade web systems end-to-end — from database architecture to pixel-perfect UI. 2+ years delivering across 6+ client products at Hepytech.",
    url: siteUrl,
    email: "alfathul1717@gmail.com",
    telephone: "+6285155099180",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
    worksFor: {
      "@type": "Organization",
      name: "Hepytech",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Terbuka",
    },
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "Playwright",
      "Prisma ORM",
      "Docker",
      "Tailwind CSS",
      "React",
      "PHP",
      "REST API",
      "QA Engineering",
    ],
    sameAs: ["https://github.com/alfathull"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="overflow-x-hidden leading-[1.7]">{children}</body>
    </html>
  );
}
