import {IoMdStar} from "react-icons/io";
import styles from "./commentForm.module.css";
import {useState} from "react";
import {showSwal} from "@/utils/helpers";
import {emailValidator} from "@/utils/helpers";

const CommentForm = ({productID}) => {
    // state
    const [username, setUsername] = useState("");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore] = useState(5);

    // function
    const productScoreHandler = score => {
        setScore(score);
        showSwal(`امتیاز ثبت شده: ${score}`, "success", "ادامه")
    }

    const sendComment = async () => {
        // validation data
        if (!username.trim()) {
            showSwal("لطفا نام را وارد کنید.", "error", "تلاش مجدد");
            return false;
        }

        if (!body.trim()) {
            showSwal("لطفا متن را وارد کنید.", "error", "تلاش مجدد");
            return false;
        }

        if (!email.trim()) {
            showSwal("لطفا ایمیل را وارد کنید.", "error", "تلاش مجدد");
            return false;
        }

        const isValidEmail = emailValidator(email);
        if (!isValidEmail) {
            showSwal("لطفا ایمیل را به درستی وارد کنید.", "error", "تلاش مجدد");
            return false;
        }

        const data = {
            username,
            body,
            email,
            score,
            productID
        }

        // send req
        const res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (res.status === 201) {
            showSwal("کامنت با موفقیت ثبت شد.", "success", "بستن");
        } else if (res.status === 422) {
            showSwal("اطلاعات وارد شده صحیح نیست.", "error", "تلاش مجدد");
        } else if (res.status === 500) {
            showSwal("خطای سرور.", "error", "تلاش مجدد");
        } else {
            showSwal("خطای ناشناخته.", "error", "تلاش مجدد");
        }
    }

    // jsx
    return (
        <div className={styles.form}>
            <p className={styles.title}>دیدگاه خود را بنویسید</p>
            <p>
                نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
                <span style={{color: "red"}}>*</span>
            </p>
            <div className={styles.rate}>
                <p>امتیاز شما :</p>
                <div>
                    <IoMdStar onClick={() => productScoreHandler(5)}/>
                    <IoMdStar onClick={() => productScoreHandler(4)}/>
                    <IoMdStar onClick={() => productScoreHandler(3)}/>
                    <IoMdStar onClick={() => productScoreHandler(2)}/>
                    <IoMdStar onClick={() => productScoreHandler(1)}/>
                </div>
            </div>
            <div className={styles.group}>
                <label htmlFor="">
                    دیدگاه شما
                    <span style={{color: "red"}}>*</span>
                </label>
                <textarea
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    required=""
                    placeholder=""
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
            </div>
            <div className={styles.groups}>
                <div className={styles.group}>
                    <label htmlFor="">
                        نام
                        <span style={{color: "red"}}>*</span>
                    </label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="">
                        ایمیل
                        <span style={{color: "red"}}>*</span>
                    </label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className={styles.checkbox}>
                <input type="checkbox" name="" id=""/>
                <p>
                    {" "}
                    ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
                    می‌نویسم.
                </p>
            </div>
            <button onClick={sendComment}>ثبت</button>
        </div>
    );
};

export default CommentForm;
