import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Promote from "@/components/templates/index/promote/Promote";
import Articles from "@/components/templates/index/articles/Articles";

export default function Home() {
    // jsx
    return (
        <>
            <Banner/>
            <Latest/>
            <Promote/>
            <Articles/>
        </>
    )
}