import autocad1_1 from './files/autocad1_1.jpg'; // Failo importavimas (būtinas)
import autocad1_2 from './files/autocad1_2.jpg'; 
import autocad2_1 from './files/autocad2_1.png'; 
import autocad2_2 from './files/autocad2_2.png'; 

export default function Grafika() {
    return (
        <section id="Grafika" className="lessonSection">
            <h1>Autocad</h1>
            <div className="lessonContainer">
                <h3>Įžanga.</h3>
                <ul>
                    <li>Susipažinimas su programa, darbais ir darbo aplinka.</li>
                </ul>
                <h3>1 tema.</h3>
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
            </div>
        </section>
    );
}