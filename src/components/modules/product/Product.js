import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css";
import {FaRegStar, FaStar} from "react-icons/fa";
import {CiSearch, CiHeart} from "react-icons/ci";

const Card = ({name, price, score}) => {
    return (
        <div className={styles.card}>
            <div className={styles.details_container}>
                <Image
                    src="/images/product-image.png"
                    alt="Coffee Product Image"
                    width="280"
                    height="300"
                />
                <div className={styles.icons}>
                    <Link href="/">
                        <CiSearch/>
                        <p className={styles.tooltip}>مشاهده سریع</p>
                    </Link>
                    <div>
                        <CiHeart/>
                        <p className={styles.tooltip}>افزودن به علاقه مندی ها </p>
                    </div>
                </div>
                <button>افزودن به سبد خرید</button>
            </div>

            <div className={styles.details}>
                <Link href={"/"}>{name}</Link>
                <div>
                    {
                        new Array(Math.round(score)).fill(0).map((stare, index) => (
                            <FaStar key={index}/>
                        ))
                    }
                    {
                        new Array(5 - Math.round(score)).fill(0).map((stare, index) => (
                            <FaRegStar key={index}/>
                        ))
                    }
                </div>
                <span>{price.toLocaleString()} تومان</span>
            </div>
        </div>
    );
};

export default Card;
