import pamoka2 from './files/pamoka2.pptx';
import pamoka3 from './files/pamoka3.pptx';
import pamoka4 from './files/pamoka4.pptx';

export default function Dvyliktokai() {
    return (
        <section id="Dvyliktokai" className="lessonSection">
            <h1>Dvyliktokai</h1>
            <div className="lessonContainer">
                <h3>1 pamoka</h3>
                <ul>
                    <li>Supažindinimas su ugdymo turiniu, vertinimo sistema, IT VBE programa ir saugos taisyklėmis.</li>
                </ul>

                <h3>2 pamoka</h3>
                <ul>
                    <li>
                        Programos atsisiuntimas asmeniniam kompiuteriui <a href='https://sourceforge.net/projects/codeblocks/files/Binaries/20.03/Windows/codeblocks-20.03mingw-setup.exe/download' rel="noreferrer"> nuoroda.  </a>
                    </li>
                    <li>
                        Programos instaliavimas į asmeninį kompiuterį <a href='https://www.youtube.com/watch?v=qBEwYn3mGAg&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Pradinio kodo paaiškinimas <a href='https://www.youtube.com/watch?v=SgOtk8_4Q3o&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Smalsiems plačiau apie namespace <a href='https://www.youtube.com/watch?v=ZYPv8wWbGoU&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Atsakymų apipavidalinimas (iomanip, setprecision) <a href='https://www.youtube.com/watch?v=K-FLdQhGzwk&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Sveikojo tipo kintamųjų paaiškinimas <a href='https://www.youtube.com/watch?v=Fh2VT1tk1Oc&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Realiojo tipo kintamųjų paaiškinimas <a href='https://www.youtube.com/watch?v=CVqXUamSNa8&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Sveikosios dalies ir liekanos radimas bei pritaikymas <a href='https://www.youtube.com/watch?v=0ezG5R04Gfg&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>Uždaviniai
                        <a href={pamoka2} download="pamoka2" rel="noreferrer"> nuoroda. </a>
                        
                    </li>
                </ul>

                <h3>3 pamoka</h3>
                <ul>
                    <li>
                        Matematinės funkcijos <a href='https://www.youtube.com/watch?v=t9T8HHaxaoQ&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        Sąlygos sakinys (šakotiems algoritmams) <a href='https://www.youtube.com/watch?v=7S5v8YDDOmQ&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Smalsiems min ir max funkcijos <a href='https://www.youtube.com/watch?v=esTCA8qLR5A&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>     
                    <li>
                        Sudėtingesnis IF panaudojimas <a href='https://www.youtube.com/watch?v=hG0UN8J2rh8&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>    
                    <li>
                        Smalsiems trumpas IF aprašymas <a href='https://www.youtube.com/watch?v=1r6YzgdAQtM&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        Smalsiems IF alternatyva SWITCH <a href='https://www.youtube.com/watch?v=6kvtq43ovHg&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>               
                    <li>Uždaviniai
                        <a href={pamoka3} download="pamoka3" rel="noreferrer"> nuoroda. </a>
                        
                    </li>
                </ul>

                <h3>4 pamoka</h3>
                <ul>
                    <li>
                        Duomenų skaitymas iš failo <a href='https://www.youtube.com/watch?v=vMVgsHAmk5o&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Rezultatų saugojimas į failą <a href='https://www.youtube.com/watch?v=P68LWz6c72I&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        For ciklo sandara ir panaudojimas <a href='https://www.youtube.com/watch?v=XQoHYNEcZkU&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        Smalsiems auto for ciklas <a href='https://www.youtube.com/watch?v=_wZeYaiu9e0&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                         
                    <li>
                        Nežinomų kartojimų skaičiaus ciklas while <a href='https://www.youtube.com/watch?v=dV8NWwze7_U&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>    
                                                  
                    <li>Uždaviniai
                        <a href={pamoka4} download="pamoka4" rel="noreferrer"> nuoroda. </a>
                        
                    </li>
                </ul>
            </div>
        </section>
    );
}