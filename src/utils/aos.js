"use client";

import Aos from "aos";
import React, {useEffect} from "react";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        Aos.init();
    }, []);

    return null;
}
