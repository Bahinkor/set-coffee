import Image from "next/image";
import {MdOutlineSms} from "react-icons/md";
import styles from "./article.module.css";
import {IoShareSocialOutline} from "react-icons/io5";
import Link from "next/link";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaPinterest,
    FaTelegram,
    FaTwitter,
} from "react-icons/fa";

const Card = () => {
    return (
        <div className={styles.card}>
            <Link className={styles.img_container} href={"/article/123"}>
                <Image
                    src="/images/article-image.jpg"
                    alt="Article Coffee Image"
                    width="380"
                    height="400"
                />
            </Link>
            <div className={styles.date}>
                <span>24</span>
                <span>بهمن</span>
            </div>
            <div className={styles.details}>
                <span className={styles.tag}>قهوه</span>
                <Link href={"/article/123"} className={styles.title}>
                    مصرف قهوه با شیر برای کاهش التهاب
                </Link>
                <div>
                    <p>نویسنده</p>
                    <Image
                        src="/images/profile-image.png"
                        alt="Profile Image"
                        width="20"
                        height="20"
                    />
                    <p>Mohebi</p>
                    <div>
                        <MdOutlineSms/>
                        <span>0</span>
                    </div>
                    <div className={styles.share}>
                        <IoShareSocialOutline/>
                        <div className={styles.tooltip}>
                            <Link href={"/"}>
                                <FaTelegram/>
                            </Link>
                            <Link href={"/"}>
                                <FaLinkedinIn/>
                            </Link>
                            <Link href={"/"}>
                                <FaPinterest/>
                            </Link>
                            <Link href={"/"}>
                                <FaTwitter/>
                            </Link>
                            <Link href={"/"}>
                                <FaFacebookF/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
