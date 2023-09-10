import "../styles/navbar.css"
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav id="NavBar">
            <div id="Logo">
                <Link to="/">Liuokaitis.lt</Link>
            </div>
            <div id="NavLinks">
                <ul>
                    <li><Link to="/pamokos/desimtokai">Dešimtokai</Link></li>
                    <li><Link to="/pamokos/vienuoliktokai">Vienuoliktokai</Link></li>
                    <li><Link to="/pamokos/dvyliktokai">Dvyliktokai</Link></li>
                    <li><Link to="/pamokos/grafika">Autocad</Link></li>
                </ul>
            </div>
        </nav>
    );
}