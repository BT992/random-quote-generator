import "./globals.css";


export const metadata = {
  title: "Random Quote Generator",
  description: "Developed by BT",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
