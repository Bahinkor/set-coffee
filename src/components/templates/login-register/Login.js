"use client"

import React, {useState} from "react";
import Sms from "@/components/templates/login-register/Sms";
import styles from "./login.module.css";
import Link from "next/link";

const Login = ({showRegisterForm}) => {
    // state
    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);

    // function
    const hideOtpFrom = () => setIsLoginWithOtp(false);

    // jsx
    return (
        <>
            {
                !isLoginWithOtp ? (
                    <>
                        <div className={styles.form}>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="ایمیل/شماره موبایل"
                            />
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="رمز عبور"
                            />
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <p>مرا به یاد داشته باش</p>
                            </div>
                            <button className={styles.btn}>ورود</button>
                            <Link href={"/forget-password"} className={styles.forgot_pass}>
                                رمز عبور را فراموش کرده اید؟
                            </Link>
                            <button className={styles.btn} onClick={() => setIsLoginWithOtp(true)}>ورود با کد یکبار
                                مصرف
                            </button>
                            <span>ایا حساب کاربری ندارید؟</span>
                            <button className={styles.btn_light} onClick={showRegisterForm}>ثبت نام</button>
                        </div>
                        <Link href={"/"} className={styles.redirect_to_home}>
                            لغو
                        </Link>
                    </>
                ) : (
                    <Sms hideOtp={hideOtpFrom}/>
                )
            }
        </>
    );
};

export default Login;
