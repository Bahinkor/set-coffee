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
        <AOSInit/>
        {children}
        </body>
        </html>
    )
}
