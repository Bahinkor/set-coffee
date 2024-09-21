"use client";
import React from "react";
import styles from "./tabs.module.css";
import {useState} from "react";
import Description from "./Description";
import MoreInfoes from "./MoreInfoes";
import Comments from "./Comments";

const Tabs = ({productData}) => {
    const [tab, setTab] = useState("description");

    return (
        <>
            <div data-aos="fade-left" className={styles.tabs}>
                <ul>
                    <li>
                        <button
                            className={tab === "description" ? styles.active_tab : ""}
                            onClick={() => setTab("description")}
                        >
                            توضیحات
                        </button>
                    </li>
                    <li>
                        <button
                            className={tab === "moreInfoes" ? styles.active_tab : ""}
                            onClick={() => setTab("moreInfoes")}
                        >
                            اطلاعات بیشتر
                        </button>
                    </li>
                    <li>
                        <button
                            className={tab === "comments" ? styles.active_tab : ""}
                            onClick={() => setTab("comments")}
                        >
                            نظرات (
                            {productData.comments.filter((comment) => comment.isAccept).length})
                        </button>
                    </li>
                </ul>

                <div className={styles.contents}>
                    <section>
                        {tab === "description" && <Description/>}
                        {tab == "moreInfoes" && (
                            <MoreInfoes productData={JSON.parse(JSON.stringify(productData))}/>
                        )}
                        {tab == "comments" && (
                            <Comments
                                productID={productData._id}
                                comments={JSON.parse(JSON.stringify(productData.comments))}
                            />
                        )}
                    </section>
                </div>
            </div>
        </>
    );
};

export default Tabs;
