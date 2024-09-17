import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/footer/Footer";
import './globals.css';
import AOSInit from "@/utils/aos";
import ScrollToTop from "@/components/modules/scrollToTop/SctollToTop";

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

        {/* Start Scroll To Top Button */}
        <ScrollToTop/>
        {/* Finish Scroll To Top Button */}

        {/* Start Footer Section */}
        <Footer/>
        {/* Finish Footer Section */}

        </body>
        </html>
    )
}
