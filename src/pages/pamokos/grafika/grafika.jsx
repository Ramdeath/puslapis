import autocad1_1 from './files/autocad1_1.jpg'; // Failo importavimas (būtinas)
import autocad1_2 from './files/autocad1_2.jpg'; 
import autocad2_1 from './files/autocad2_1.png'; 
import autocad2_2 from './files/autocad2_2.png'; 
import autocad3_1 from './files/autocad3_1.jpg'; 
import autocad3_2 from './files/autocad3_2.jpg'; 
import autocad4_1 from './files/autocad4_1.jpg'; 
import autocad4_2 from './files/autocad4_2.jpg'; 
import autocad4_3 from './files/autocad4_3.jpg'; 
import autocad4_4 from './files/autocad4_4.jpg'; 
import autocad5_1 from './files/autocad5_1.jpg'; 
import autocad5_2 from './files/autocad5_2.jpg'; 
import autocad5_3 from './files/autocad5_3.jpg'; 
import autocad5_4 from './files/autocad5_4.jpg'; 

export default function Grafika() {
    return (
        <section id="Grafika" className="lessonSection">
            <h1>Autocad</h1>
            <div className="lessonContainer">
                <h3>Įžanga</h3>
                <ul>
                    <li>Susipažinimas su programa, darbais ir darbo aplinka.</li>
                </ul>
                <h3>1 tema</h3>
                <ul>
                    <li>Komandos: line, rectangle, circle, leader.</li>
                    <li>Koordinatės: absoliučios, santykinės ir polinės. </li> 
                    <li>Brėžiniai
                        <a href={autocad1_1} download="autocad1_1" rel="noreferrer"> nuoroda1, </a>
                        <a href={autocad1_2} download="autocad1_2" rel="noreferrer"> nuoroda2. </a>
                    </li>
                    <li>Brėžinio atlikimo eiga: <a href='https://www.youtube.com/watch?v=1cg1LLd_D4Y&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                </ul>

                <h3>2 tema</h3>
                <ul>
                    <li>Komanda offset.</li>                    
                    <li>Brėžiniai
                        <a href={autocad2_1} download="autocad2_1"  target="_blank" rel="noreferrer"> nuoroda1, </a>
                        <a href={autocad2_2} download="autocad2_2" target="_self" rel="noreferrer"> nuoroda2. </a>
                    </li>
                    <li>Brėžinio atlikimo eiga: <a href='https://www.youtube.com/watch?v=hj3DIBgn7vg&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                </ul>

                <h3>3 tema</h3>
                <ul>
                    <li>Komandos: midpoint ir trim.</li>                    
                    <li>Brėžiniai
                        <a href={autocad3_1} download="autocad3_1"  target="_blank" rel="noreferrer"> nuoroda1, </a>
                        <a href={autocad3_2} download="autocad3_2" target="_self" rel="noreferrer"> nuoroda2. </a>
                    </li>
                    <li>Brėžinio atlikimo eiga: <a href='https://www.youtube.com/watch?v=hj3DIBgn7vg&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                </ul>

                <h3>4 tema</h3>
                <ul>
                    <li>Komandos: trim, stretch, mirror, tangent.</li>                    
                    <li>Brėžiniai
                        <a href={autocad4_1} download="autocad4_1"  target="_blank" rel="noreferrer"> nuoroda1, </a>
                        <a href={autocad4_2} download="autocad4_2" target="_self" rel="noreferrer"> nuoroda2, </a>
                        <a href={autocad4_3} download="autocad4_3" target="_self" rel="noreferrer"> nuoroda3, </a>
                        <a href={autocad4_4} download="autocad4_4" target="_self" rel="noreferrer"> nuoroda4. </a>
                    </li>
                    <li>Brėžinio atlikimo eiga (stretch ir mirror): <a href='https://www.youtube.com/watch?v=CBDp9NPO7fU&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                    <li>Brėžinio atlikimo eiga (tangent ir trim): <a href='https://www.youtube.com/watch?v=rs1LvZQMie0&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                </ul>

                <h3>5 tema</h3>
                <ul>
                    <li>Komandos: trim, stretch, mirror, tangent.</li>                    
                    <li>Brėžiniai
                        <a href={autocad5_1} download="autocad5_1"  target="_blank" rel="noreferrer"> nuoroda1, </a>
                        <a href={autocad5_2} download="autocad5_2" target="_self" rel="noreferrer"> nuoroda2, </a>
                        <a href={autocad5_3} download="autocad5_3" target="_self" rel="noreferrer"> nuoroda3, </a>
                        <a href={autocad5_4} download="autocad5_4" target="_self" rel="noreferrer"> nuoroda4. </a>
                    </li>
                    <li>1 brėžinio atlikimo eiga: <a href='https://www.youtube.com/watch?v=Kc1omsDZKek&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                    <li>2 brėžinio atlikimo eiga (tangent ir trim): <a href='https://www.youtube.com/watch?v=enftnfylmrc&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.</a></li>
                </ul>
            </div>
        </section>
    );
}