"use client"

import React, {useState} from "react";
import Sms from "@/components/templates/login-register/Sms";
import styles from "./login.module.css";
import Link from "next/link";
import {showSwal, phoneValidator, emailValidator} from "@/utils/helpers";

const Login = ({showRegisterForm}) => {
    // state
    const [isLoginWithOtp, setIsLoginWithOtp] = useState(false);
    // login form data state
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    // function
    const hideOtpFrom = () => setIsLoginWithOtp(false);

    const signInWithPassword = async () => {
        // validation data
        if (!identifier.trim()) {
            showSwal("لطفا نام کاربری را وارد کنید.", "error", "تلاش مجدد");
            return false;
        }

        const isValidPhone = phoneValidator(identifier);
        const isValidEmail = emailValidator(identifier);

        if (!isValidEmail && !isValidPhone) {
            showSwal("نام کاربری نامعتبر است.", "error", "تلاش مجدد");
            return false;
        }

        if (password.trim().length < 4) {
            showSwal("رمز باید حداقل ۴ کارکتر داشته باشد.", "error", "تلاش مجدد");
            return false;
        }

        // send req to api
        const data = {
            email: identifier,
            password
        };

        const res = await fetch("/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (res.status === 200) {
            showSwal("با موفقیت وارد شدید.", "success", "ورود به پنل");
            setIdentifier("");
            setPassword("");
        } else if (res.status === 422 || res.status === 404) {
            showSwal("اطلاعات وارد شده نامعتبر است.", "error", "تلاش مجدد");
        } else if (res.status === 401) {
            showSwal("نام کاربری یا رمز نامعتبر است.", "error", "تلاش مجدد");
        } else if (res.status === 500) {
            showSwal("اوه! خطای ناشناخته در سرور.", "error", "تلاش مجدد");
        }
    }

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
                                value={identifier}
                                onChange={e => setIdentifier(e.target.value)}
                                placeholder="ایمیل/شماره موبایل"
                            />
                            <input
                                className={styles.input}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="رمز عبور"
                            />
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="" id=""/>
                                <p>مرا به یاد داشته باش</p>
                            </div>
                            <button className={styles.btn} onClick={signInWithPassword}>ورود</button>
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
