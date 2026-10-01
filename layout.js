import "./globals.css";

export const metadata = {
  title: "BrightPath CRM",
  description: "BrightPath Learning Customer Relationship Management System"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
