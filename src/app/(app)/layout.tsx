import type { Metadata } from "next";
import "@/styles/tailwind.css";

const title = "Puppy Owners Hub";
const description = "A knowledge base for happy new puppy owners";

export const metadata: Metadata = {
  metadataBase: new URL("https://keystatic-examples-knowledge-base.vercel.app"),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: `/og?title=${title}`,
        width: 800,
        height: 600,
      },
      {
        url: `/og?title=${title}`,
        width: 1600,
        height: 1200,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
