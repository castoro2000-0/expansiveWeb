import React, { useEffect } from "react";

function Script() {
    useEffect(() => {
        const header = document.getElementsByTagName("header")[0];

        function handleScroll() {
            const websitePosition = window.scrollY;
            if (header) {
                header.style.background = websitePosition >= 200 ? "rgba(4, 4, 4, 1)" : "rgba(0, 0, 0, 0)";
            }
        }

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
}

export default Script;
