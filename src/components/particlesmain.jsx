import Particles from "react-tsparticles";
import { settings } from "../settings/particleslessons";
import { loadFull } from "tsparticles";

import { useEffect } from "react";

export default function ParticlesMain() {
    var particlesInit = async (main) => {await loadFull(main);}; // load particles

    useEffect(() => { // on load
        if(window.innerWidth < 768) {
            document.getElementById("limitedParticles").style.display = "none";
        }
    }, []);
    
    return (
        <div id="LimitedParticles">
            <Particles
                id="limitedParticles"
                init={particlesInit}
                options={settings}
            />
        </div>
    );
}