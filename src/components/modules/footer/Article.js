import Image from "next/image";
import Link from "next/link";
import styles from "./article.module.css";
const Article = ({ title, img, comments, date, href }) => {
  return (
    <Link href={href} className={styles.article}>
      <Image width={75} height={65} src={img} alt="Coffee Image" />
      <div>
        <p className={styles.title}>{title}</p>
        <div>
          <p>{comments}</p>
          <p dir="rtl">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default Article;
