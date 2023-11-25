import pamoka1 from './files/pamoka1_2.pptx';
import pamoka3 from './files/pamoka3.pptx';
import pamoka4 from './files/pamoka4.pptx';
import pamoka5 from './files/pamoka5_6.pptx';
import pamoka8 from './files/pamoka8.pptx';
import tinklai from './files/tinklai.pptx';
import excel1 from './files/Excel1.pptx';
import excel2 from './files/Excel2.pptx';
import excel3 from './files/Excel3.pptx';
import excel4 from './files/Excel4.pptx';
import excel5 from './files/Excel5.pptx';
import excel7 from './files/Excel7.pptx';
import excel9 from './files/Excel9.pptx';
import excel11 from './files/Excel11.pptx';

export default function Vienuoliktokai() {
    return (
        <section id="Vienuoliktokai" className="lessonSection">
            <h1>Vienuoliktokai</h1>
            <div className="lessonContainer">
                <h3>1 savaitė</h3>
                <ul>
                    <li>1-2 pamoka „Kompiuterių raida, algoritmai ir programos“
                        <a href={pamoka1} download="pamoka1" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    <li>3 pamoka „Duomenų kodavimas ir skaičiavimo sistemos kompiuteriuose“
                        <a href={pamoka3} download="pamoka3" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    <li>4 pamoka „Higienos, ergonominės ir techninės saugaus darbo skaitmeninėmis technologijomis normos“
                        <a href={pamoka4} download="pamoka4" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                </ul>

                <h3>2 savaitė</h3>
                <ul>
                    <li>5-6 pamoka „Programavimo kalbos konstrukcijos“
                        <a href={pamoka5} download="pamoka5" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    <li>7 pamoka „Duomenų kodavimas ir skaičiavimo sistemos kompiuteriuose“.
                                                
                    </li>
                    <li>8 pamoka „Rizikos žmogaus fizinei ir psichinei savijautai naudojant skaitmenines technologijas“
                        <a href={pamoka8} download="pamoka8" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    
                </ul>                

                <h3>3 savaitė</h3>
                <ul>
                    <li>
                        9-11 pamoka:
                    </li>
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
                        <u>Smalsiems</u> plačiau apie namespace <a href='https://www.youtube.com/watch?v=ZYPv8wWbGoU&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
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
                    <li>
                        Matematinės funkcijos <a href='https://www.youtube.com/watch?v=t9T8HHaxaoQ&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        Sąlygos sakinys (šakotiems algoritmams) <a href='https://www.youtube.com/watch?v=7S5v8YDDOmQ&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        <u>Smalsiems</u> min ir max funkcijos <a href='https://www.youtube.com/watch?v=esTCA8qLR5A&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>     
                    <li>
                        Sudėtingesnis IF panaudojimas <a href='https://www.youtube.com/watch?v=hG0UN8J2rh8&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>    
                    <li>
                        <u>Smalsiems</u> trumpas IF aprašymas <a href='https://www.youtube.com/watch?v=1r6YzgdAQtM&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>   
                    <li>
                        <u>Smalsiems</u> IF alternatyva SWITCH <a href='https://www.youtube.com/watch?v=6kvtq43ovHg&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>  
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
                        <u>Smalsiems</u> auto for ciklas <a href='https://www.youtube.com/watch?v=_wZeYaiu9e0&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                         
                    <li>
                        Nežinomų kartojimų skaičiaus ciklas while <a href='https://www.youtube.com/watch?v=dV8NWwze7_U&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>  
                    <li>
                        12 pamoka. Aplinkosaugos problemos ir jų sprendimai.
                    </li>               
                </ul>

                <h3>4 savaitė</h3>
                <ul>
                    <li>
                        Ciklas cikle <a href='https://www.youtube.com/watch?v=MXdWoYqZACU&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Funkcijos <a href='https://www.youtube.com/watch?v=tiQYTVz9zS0&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li> 
                    <li>
                        Šifravimo metodai.    
                    </li>  
                    <li>
                        Saugaus darbo virtualiojoje erdvėje principai, pavojai ir problemos.    
                    </li>                    
                </ul>
                <h3>5 savaitė</h3>
                <ul>
                    <li>
                        Kintamasis string <a href='https://www.youtube.com/watch?v=0KXD0gWdc54&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Kintamasis bool <a href='https://www.youtube.com/watch?v=Klbk5nEaUWg&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li> 
                    <li>
                        Funkcija su parametrais-nuorodomis <a href='https://www.youtube.com/watch?v=cY6bUjCQ9Js&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>
                    <li>
                        Apvalinimo funkcijos <a href='https://www.youtube.com/watch?v=pVjRA_dbbWM&ab_channel=RamunasLiuokaitis' rel="noreferrer">video.  </a>
                    </li>       
                    <li>
                        Šifravimo metodai.
                    </li>
                    <li>
                        Grupinės bendravimo priemonės ir etikos principai.
                    </li>               
                </ul>

                <h3>Kompiuterių tinklai</h3>
                <ul>
                    <li>Informacija apie kompiuterių tinklus
                        <a href={tinklai} download="tinklai" rel="noreferrer"> nuoroda. </a>                        
                    </li>               
                </ul>

                <h3>Skaičiuoklės (excel) kartojimas</h3>
                <ul>
                    <li>1 pamoka. Koordinatės ir formulės struktūra
                        <a href={excel1} download="excel1" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    <li>2 pamoka. Sąlyginės funkcijos kartojimas
                        <a href={excel2} download="excel2" rel="noreferrer"> nuoroda. </a>                        
                    </li>        
                    <li>3 pamoka. Mišrių koordinačių ir funkcijų grafikų kartojimas
                        <a href={excel3} download="excel3" rel="noreferrer"> nuoroda. </a>                        
                    </li>        
                    <li>4 pamoka. Funkcijų grafikai ir duomenų rikiavimas
                        <a href={excel4} download="excel4" rel="noreferrer"> nuoroda. </a>                        
                    </li>   
                    <li>5-6 pamoka. Funkcijos COUNT, COUNTIF ir SUMIF
                        <a href={excel5} download="excel5" rel="noreferrer"> nuoroda. </a>                        
                    </li>                       
                </ul>

                <h3>Skaičiuoklės (excel) naujos temos</h3>
                <ul>
                    <li>7-8 pamoka. Loginės funkcijos 
                        <a href={excel7} download="excel7" rel="noreferrer"> nuoroda. </a>                        
                    </li>  
                    <li>9-10 pamoka. Funkcijos Round ir TRUNC 
                        <a href={excel9} download="excel9" rel="noreferrer"> nuoroda. </a>                        
                    </li>
                    <li>11-12 pamoka. Sudėtingesni sąlyginės funkcijos atvejai
                        <a href={excel11} download="excel11" rel="noreferrer"> nuoroda. </a>                        
                    </li>                         
                </ul>
            </div>
        </section>
    );
}