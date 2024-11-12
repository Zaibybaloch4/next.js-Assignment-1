
import "./globals.css";
import Navbar from "./Navbar";

 function RootLayout({children}: any) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
        </html>
  
  );
}

export default RootLayout;
