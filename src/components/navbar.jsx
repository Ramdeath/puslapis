import "../styles/navbar.css"
import { Link } from 'react-router-dom';

import { useEffect } from "react";

// check what is the current page

export default function NavBar() {
    function getMiddleOfElement(element) {
        const rect = element.getBoundingClientRect();
        return rect.left + (rect.width / 2) - 4;
    }

    function alignBalls(element) {
        const ball = document.getElementById("Ball");

        const deNav = document.getElementById("deNav");
        const vNav = document.getElementById("vNav");
        const dvNav = document.getElementById("dvNav");
        const aNav = document.getElementById("aNav");

        if (element) { 
            // stupid chromium, looks scuffed cause of scroll bar and I can't do anything about it, temporerly disabled
            /*
            ball.style.transform = `translateX(${getMiddleOfElement(document.getElementById(element))}px)`; 
            return;
            */
        }

        setTimeout(() => { // wait for the page to load for now, when all the pages are done, remove this
            const currentPath = window.location.pathname;
            ball.style.opacity = "1";

            if (currentPath.includes("desimtokai")) { ball.style.transform = `translateX(${getMiddleOfElement(deNav)}px)`;}
            else if (currentPath.includes("vienuoliktokai")) { ball.style.transform = `translateX(${getMiddleOfElement(vNav)}px)`;}
            else if (currentPath.includes("dvyliktokai")) { ball.style.transform = `translateX(${getMiddleOfElement(dvNav)}px)`;}
            else if (currentPath.includes("grafika")) { ball.style.transform = `translateX(${getMiddleOfElement(aNav)}px)`;}
            else { 
                ball.style.transform = `translateX(${document.getElementById("NavLinks").getBoundingClientRect().left}px)`
                ball.style.opacity = "0";
            ;}
        }, 50);
    }

    useEffect(() => {
        const ball = document.getElementById("Ball");
        ball.style.transform = `translateX(${document.getElementById("NavLinks").getBoundingClientRect().left}px)`
        setTimeout(() => {
            alignBalls();
        }, 300);
        window.addEventListener("resize", alignBalls);
    }, []);

    return (
        <nav id="NavBar">
            <div id="Logo">
                <Link to="/" onClick={() => alignBalls()}>Liuokaitis.lt</Link>
            </div>
            <div id="Ball">▼</div>
            <div id="NavLinks">
                <ul>
                    <li><Link onClick={() => alignBalls('deNav')} id="deNav" to="/pamokos/desimtokai">Dešimtokai</Link></li>
                    <li><Link onClick={() => alignBalls('vNav')} id="vNav" to="/pamokos/vienuoliktokai">Vienuoliktokai</Link></li>
                    <li><Link onClick={() => alignBalls('dvNav')} id="dvNav" to="/pamokos/dvyliktokai">Dvyliktokai</Link></li>
                    <li><Link onClick={() => alignBalls('aNav')} id="aNav" to="/pamokos/grafika">Autocad</Link></li>
                </ul>
            </div>
        </nav>
    );
}