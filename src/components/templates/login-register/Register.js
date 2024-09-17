"use client"

import React, {useState} from "react";
import Link from "next/link";
import Sms from "@/components/templates/login-register/Sms";
import styles from "./register.module.css";

const Register = ({showLoginForm}) => {
    // state
    const [isRegisterWithPassword, setIsRegisterWithPassword] = useState(false);
    const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);

    // function
    const hideOtpFrom = () => setIsRegisterWithOtp(false);

    // jsx
    return (
        <>
            {
                !isRegisterWithOtp ? (
                    <>
                        <div className={styles.form}>
                            <input className={styles.input} type="text" placeholder="نام"/>
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="شماره موبایل  "
                            />
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="ایمیل (دلخواه)"
                            />
                            {
                                isRegisterWithPassword && (
                                    <input
                                        className={styles.input}
                                        type="password"
                                        placeholder="رمز عبور"
                                    />
                                )
                            }
                            <p style={{marginTop: "1rem"}} className={styles.btn}
                               onClick={() => setIsRegisterWithOtp(true)}>
                                ثبت نام با کد تایید
                            </p>
                            <button style={{marginTop: ".7rem"}} className={styles.btn}
                                    onClick={() => setIsRegisterWithPassword(true)}>
                                ثبت نام با رمزعبور
                            </button>
                            <p className={styles.back_to_login} onClick={showLoginForm}>برگشت به ورود</p>
                        </div>
                        <Link href="/" className={styles.redirect_to_home}>لغو</Link>
                    </>
                ) : (
                    <Sms hideOtp={hideOtpFrom}/>
                )
            }
        </>
    );
};

export default Register;
