import "./globals.css";
import motivofondo from "../.././public/motivofondo.png";


export const metadata = {
  title: "Libretema",
  description: "Interfaz de bibiblioteca personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        backgroundImage: `url(${motivofondo.src})`
      }}>{children}
     
      </body>
      
    </html>
  );
}
