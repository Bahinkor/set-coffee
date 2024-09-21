"use client"
import {CiHeart} from "react-icons/ci";

export default function AddToWishlist() {
    // function
    const addToWishlist = () => {
        console.log("added to wishlist.");
    };

    // jsx
    return (
        <div onClick={addToWishlist}>
            <CiHeart/>
            <a href="/">افزودن به علاقه مندی ها</a>
        </div>
    );
}