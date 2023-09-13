import pamoka1 from './files/pamoka1_2.pptx';
import pamoka3 from './files/pamoka3.pptx';
import pamoka4 from './files/pamoka4.pptx';
import pamoka5 from './files/pamoka5_6.pptx';
import pamoka8 from './files/pamoka8.pptx';

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
            </div>
        </section>
    );
}