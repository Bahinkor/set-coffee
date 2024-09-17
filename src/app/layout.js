import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import './globals.css';
import AOSInit from "@/utils/aos";

// meta data tags foe seo
export const metadata = {
    title: "فروشگاه اینتزنتی ست کافی | صفحه اصلی | Set Coffee",
    description: "test description",
    icons: {
        icon: "/images/favicon.svg",
    }
}

export default function RootLayout({children}) {
    // jsx
    return (
        <html lang="fa">
        <body>
        {/* AOS Package */}
        <AOSInit/>

        {/* Start Header And Nav Section */}
        <Navbar/>
        {/* Finish Header And Nav Section */}

        {children}

        {/* Start Footer Section */}
        <Footer/>
        {/* Finish Footer Section */}

        </body>
        </html>
    )
}
