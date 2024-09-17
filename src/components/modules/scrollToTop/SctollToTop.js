"use client";
import {useEffect, useState} from "react";
import {MdKeyboardArrowUp} from "react-icons/md";
import styles from "./ScrollToTop.module.css";

const ScrollToTop = () => {
    // state
    const [isVisible, setIsVisible] = useState(false);

    // useEffect
    useEffect(() => {

        const toggleVisibility = () => {
            window.scrollY > 110 ? setIsVisible(true) : setIsVisible(false);
        }

        // event listener
        window.addEventListener("scroll", toggleVisibility);

        // remove event
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [])

    // Function
    const scrollToTop = () => {
        isVisible && window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <button
            className={isVisible ? styles.buttonVisible : styles.button}
            onClick={scrollToTop}
        >
            <MdKeyboardArrowUp/>
        </button>
    );
};

export default ScrollToTop;
