import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";

import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import {authUser} from "@/utils/auth";

const product = async () => {
    const user = await authUser();

    return (
        <div className={styles.container}>
            <Navbar isLogin={!!user}/>
            <div data-aos="fade-up" className={styles.contents}>
                <div className={styles.main}>
                    <Details/>
                    <Gallery/>
                </div>
                <Tabs/>
                <MoreProducts/>
            </div>
            <Footer/>
        </div>
    );
};

export default product;
