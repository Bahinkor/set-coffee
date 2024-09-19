import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import Articles from "@/components/templates/index/articles/Articles";
import Footer from "@/components/modules/footer/Footer";
import {authUser} from "@/utils/auth";

export default async function Home() {
    // check login user and validation
    const user = await authUser();

    // jsx
    return (
        <>
            <Navbar isLogin={user}/>
            <Banner/>
            <Latest/>
            <Promote/>
            <Articles/>
            <Footer/>
        </>
    )
}