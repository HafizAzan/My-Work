import "./globals.css";
import { ReactQueryProvider } from "./ReactQueryProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </head>
        <body>{children}</body>
      </html>
    </ReactQueryProvider>
  );
}
