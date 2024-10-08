"use client"

import React, {useEffect, useState} from "react";
import styles from "./Nabvar.module.css";
import Link from "next/link";
import {IoIosArrowDown} from "react-icons/io";
import {FaShoppingCart, FaRegHeart} from "react-icons/fa";

export default function Navbar({isLogin}) {
    // state
    const [fixTop, setFixTop] = useState(false);

    // useEffect
    useEffect(() => {

        const fixNavbarToTop = () => {
            // scroll y
            const currentScroll = window.scrollY;

            if (currentScroll > 110) {
                setFixTop(true);
            } else {
                setFixTop(false);
            }
        }

        // event
        window.addEventListener("scroll", fixNavbarToTop);

        // unmounting
        return () => window.removeEventListener("scroll", fixNavbarToTop);

    }, []);

    // jsx
    return (
        <nav className={fixTop ? styles.navbar_fixed : styles.navbar}>
            <main>
                <div>
                    <Link href="/">
                        <img src="/images/logo.png" alt="Set Coffee Logo"/>
                    </Link>
                </div>

                <ul className={styles.links}>
                    <li>
                        <Link href="/">صفحه اصلی</Link>
                    </li>
                    <li>
                        <Link href="/category">فروشگاه</Link>
                    </li>
                    <li>
                        <Link href="/blog">وبلاگ</Link>
                    </li>
                    <li>
                        <Link href="/contact-us">تماس با ما</Link>
                    </li>
                    <li>
                        <Link href="/about-us">درباره ما</Link>
                    </li>
                    <li>
                        <Link href="/rules">قوانین</Link>
                    </li>
                    {
                        isLogin ? (
                            <>
                                {/* Start My-account section */}
                                <div className={styles.dropdown}>
                                    <Link href="/p-user">
                                        <IoIosArrowDown className={styles.dropdown_icons}/>
                                        حساب کاربری
                                    </Link>
                                    <div className={styles.dropdown_content}>
                                        <Link href="/p-user/orders">سفارشات</Link>
                                        <Link href="/p-user/tickets">تیکت های پشتیبانی</Link>
                                        <Link href="/p-user/comments">کامنت‌ها</Link>
                                        <Link href="/p-user/wishlist">علاقه‌مندی‌ها</Link>
                                        <Link href="/p-user/account-details">جزئیات اکانت</Link>
                                    </div>
                                </div>

                                {/* Finish My-account section */}
                            </>
                        ) : (
                            <li>
                                <Link href="/login-register">ورود | عضویت</Link>
                            </li>
                        )
                    }
                </ul>

                <div className={styles.navbar_icons}>
                    <Link href="/cart">
                        <FaShoppingCart/>
                        <span>1</span>
                    </Link>
                    <Link href="/wishlist">
                        <FaRegHeart/>
                        <span>1</span>
                    </Link>
                </div>
            </main>
        </nav>
    )
}