import "../styles/navbar.css"
import { Link } from 'react-router-dom';

import { useEffect } from "react";

// check what is the current page


function getMiddleOfElement(element) {
    const rect = element.getBoundingClientRect();
    return rect.left + (rect.width / 2) - 4;
}

export function alignBalls(element) {
    const ball = document.getElementById("Ball");

    const deNav = document.getElementById("deNav");
    const vNav = document.getElementById("vNav");
    const dvNav = document.getElementById("dvNav");
    const aNav = document.getElementById("aNav");

    if (typeof element === "string") { 
        ball.style.transform = `translateX(${getMiddleOfElement(document.getElementById(element))}px)`; 
        return;
    }

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
}

export default function NavBar() {
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
                <Link to="/" id="DesktopLogo" onClick={() => alignBalls()}>Liuokaitis</Link>
                <Link to="/" id="MobileLogo" onClick={() => alignBalls()}>LI<span>.</span></Link>
            </div>
            <div id="Ball">▼</div>
            <div id="NavLinks">
                <ul id="DesktopNav">
                    <li><Link id="deNav" to="/pamokos/desimtokai">Dešimtokai</Link></li>
                    <li><Link id="vNav" to="/pamokos/vienuoliktokai">Vienuoliktokai</Link></li>
                    <li><Link id="dvNav" to="/pamokos/dvyliktokai">Dvyliktokai</Link></li>
                    <li><Link id="aNav" to="/pamokos/grafika">Autocad</Link></li>
                </ul>
                <ul id="MobileNav">
                    <li><Link id="deNav" to="/pamokos/desimtokai">II</Link></li>
                    <li><Link id="vNav" to="/pamokos/vienuoliktokai">III</Link></li>
                    <li><Link id="dvNav" to="/pamokos/dvyliktokai">IV</Link></li>
                    <li><Link id="aNav" to="/pamokos/grafika">AutoCad</Link></li>
                </ul>
            </div>
        </nav>
    );
}