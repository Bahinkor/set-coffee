import Navbar from "@/components/modules/Navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";

export default function Home() {
    // jsx
    return (
        <>
            <Navbar/>
            <Banner/>
            <Latest/>
        </>
    )
}