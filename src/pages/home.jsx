import { Link } from 'react-router-dom';
import '../styles/home.css'

import Particles from "react-tsparticles";
import { settings } from '../settings/particles';
import { loadFull } from "tsparticles";

export default function Home() {
    const particlesInit = async (main) => {await loadFull(main);}; // load particles
    return (
        <section id="Home">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={settings}
            />
            <div id="Content">
                <div>
                    <h1><b>Liuokaitis.lt</b></h1>
                    <h2>Dalinis Atkūrimas</h2>
                </div>
                <ul>
                    <li><Link to="/pamokos/desimtokai">Dešimtokai</Link></li>
                    <li><Link to="/pamokos/vienuoliktokai">Vienuoliktokai</Link></li>
                    <li><Link to="/pamokos/dvyliktokai">Dvyliktokai</Link></li>
                    <li><Link to="/pamokos/grafika">Autocad</Link></li>
                </ul>
            </div>
        </section>
    );
}



