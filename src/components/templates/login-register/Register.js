"use client"

import React, {useState} from "react";
import Link from "next/link";
import Sms from "@/components/templates/login-register/Sms";
import styles from "./register.module.css";
import swal from "sweetalert";

const Register = ({showLoginForm}) => {
    // state
    const [isRegisterWithPassword, setIsRegisterWithPassword] = useState(false);
    const [isRegisterWithOtp, setIsRegisterWithOtp] = useState(false);
    // register form state
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // validation

    // function
    const hideOtpFrom = () => setIsRegisterWithOtp(false);

    const registerHandler = async () => {
        const data = {
            name,
            phone,
            email,
            password
        };

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        // sweet alert package
        if (res.status === 201) {
            swal({
                icon: "success",
                title: "ثبت نام با موفقیت انجام شد.",
                button: "ورود به پنل"
            })
        }
    }

    // jsx
    return (
        <>
            {
                !isRegisterWithOtp ? (
                    <>
                        <div className={styles.form}>
                            <input
                                className={styles.input}
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="نام"
                            />
                            <input
                                className={styles.input}
                                type="text"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                placeholder="شماره موبایل  "
                            />
                            <input
                                className={styles.input}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="ایمیل (دلخواه)"
                            />
                            {
                                isRegisterWithPassword && (
                                    <input
                                        className={styles.input}
                                        type="password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="رمز عبور"
                                    />
                                )
                            }
                            <p style={{marginTop: "1rem"}} className={styles.btn}
                               onClick={() => setIsRegisterWithOtp(true)}>
                                ثبت نام با کد تایید
                            </p>
                            <button style={{marginTop: ".7rem"}} className={styles.btn}
                                    onClick={() => {
                                        isRegisterWithPassword ? registerHandler() : setIsRegisterWithPassword(true)
                                    }}>
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
