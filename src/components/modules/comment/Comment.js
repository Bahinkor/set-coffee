import { FaStar } from "react-icons/fa";

import styles from "./comment.module.css";
const Comment = ({body, username, date}) => {
  return (
    <section className={styles.comment}>
      <img src="/images/shahin.jpg" className={styles.avatar} alt="profile image" />
      <div>
        <div className={styles.main_details}>
          <div className={styles.user_info}>
            <strong>{username}</strong>
            <p>{new Date(date).toLocaleDateString("fa-IR")}</p>
          </div>
          <div className={styles.stars}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Comment;
