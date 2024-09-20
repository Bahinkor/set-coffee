import styles from "@/styles/product.module.css";
import Gallery from "@/components/templates/product/Gallery";
import Details from "@/components/templates/product/Details";
import Tabs from "@/components/templates/product/Tabs";
import MoreProducts from "@/components/templates/product/MoreProducts";

import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import {authUser} from "@/utils/auth";
import connectToDB from "@@/configs/db";
import productModel from "@@/models/product";

const product = async ({params}) => {
    const user = await authUser();

    // get product data from db
    await connectToDB();
    const productID = params.id;
    const product = await productModel.findOne({
        _id: productID,
    }).populate("comments");

    // get related product from db
    const relatedProduct = await productModel.find({
        smell: product.smell
    });

    return (
        <div className={styles.container}>
            <Navbar isLogin={!!user}/>
            <div data-aos="fade-up" className={styles.contents}>
                <div className={styles.main}>
                    <Details productData={JSON.parse(JSON.stringify(product))}/>
                    <Gallery/>
                </div>
                <Tabs productData={JSON.parse(JSON.stringify(product))}/>
                <MoreProducts relatedProducts={JSON.parse(JSON.stringify(relatedProduct))}/>
            </div>
            <Footer/>
        </div>
    );
};

export default product;
