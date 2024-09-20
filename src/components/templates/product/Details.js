import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { TbSwitch3 } from "react-icons/tb";
import { FaTelegram, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import styles from "./details.module.css";
import Breadcrumb from "./Breadcrumb";

const Details = ({productData}) => {
  return (
    <main style={{ width: "63%" }}>
      <Breadcrumb
        title={productData.name}
      />
      <h2>{productData.name}</h2>

      <div className={styles.rating}>
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>(دیدگاه {productData.comments.length} کاربر)</p>
      </div>

      <p className={styles.price}>{productData.price.toLocaleString()} تومان</p>
      <span className={styles.description}>{productData.shortDescription}</span>

      <hr />

      <div className={styles.Available}>
        <IoCheckmark />
        <p>موجود در انبار</p>
      </div>

      <div className={styles.cart}>
        <button>افزودن به سبد خرید</button>
        <div>
          <span>-</span>1<span>+</span>
        </div>
      </div>

      <section className={styles.wishlist}>
        <div>
          <CiHeart />
          <a href="/">افزودن به علاقه مندی ها</a>
        </div>
        <div>
          <TbSwitch3 />
          <a href="/">مقایسه</a>
        </div>
      </section>

      <hr />

      <div className={styles.details}>
        <strong>شناسه محصول: {productData._id}</strong>
        <p>
          <strong>برچسب:</strong>{productData.tags.join(",")}</p>
      </div>

      <div className={styles.share}>
        <p>به اشتراک گذاری: </p>
        <a href="/">
          <FaTelegram />
        </a>
        <a href="/">
          <FaLinkedinIn />
        </a>
        <a href="/">
          <FaPinterest />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaFacebookF />
        </a>
      </div>

      <hr />
    </main>
  );
};

export default Details;
