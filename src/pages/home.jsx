import { Link } from 'react-router-dom';
import '../styles/home.css'

export default function Home() {
    return (
        <section id="Home">
            <h1><b>Liuokaitis.lt</b></h1>
            <ul>
                <li><Link to="/pamokos/desimtokai">Dešimtokai</Link></li>
                <li><Link to="/pamokos/vienuoliktokai">Vienuoliktokai</Link></li>
                <li><Link to="/pamokos/dvyliktokai">Dvyliktokai</Link></li>
                <li><Link to="/pamokos/grafika">Kompiuterinė Grafika</Link></li>
            </ul>
            <p> Laikina svetainė </p>
        </section>
    );
}



