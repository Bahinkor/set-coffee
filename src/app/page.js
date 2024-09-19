import Navbar from "@/components/modules/navbar/Navbar";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import Articles from "@/components/templates/index/articles/Articles";
import Footer from "@/components/modules/footer/Footer";
import {cookies} from "next/headers";
import {verifyAccessToken} from "@/utils/auth";
import connectToDB from "@@/configs/db";
import model from "@@/models/user";

export default async function Home() {
    // get access token cookie
    const cookie = cookies();
    const token = cookie.get("token");
    let user = null;

    // validation access token
    if (token) {
        const tokenPayload = verifyAccessToken(token.value);
        if (tokenPayload) {
            await connectToDB();
            user = await model.findOne({
                email: tokenPayload.email
            });
        }
    }


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