"use client";

import Image from "next/image";
import styles from "@/styles/login-register.module.css";
import {useState} from "react";
import {authTypes} from "@/utils/constants";

import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";

const LoginRegister = () => {
    // state
    const [authType, setAuthType] = useState(authTypes.LOGIN);

    // function
    const showRegisterForm = () => setAuthType(authTypes.REGISTER);
    const showLoginForm = () => setAuthType(authTypes.LOGIN);

    // jsx
    return (
        <div className={styles.login_register}>
            <div className={styles.form_bg} data-aos="fade-up">
                {authType === authTypes.LOGIN ? (
                    <Login showRegisterForm={showRegisterForm}/>
                ) : (
                    <Register showLoginForm={showLoginForm}/>
                )}
            </div>
            <section>
                <Image
                    src="/images/login-form-image.webp"
                    alt="Cofee Background Image"
                    width="1200"
                    height="800"
                />
            </section>
        </div>
    );
};

export default LoginRegister;
