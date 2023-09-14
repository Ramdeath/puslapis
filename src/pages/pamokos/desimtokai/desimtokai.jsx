import pamoka1 from './files/pazintis_su_codeblocks1.ppt'; // Failo importavimas (būtinas)
import pamoka2 from './files/pamoka2.ppt'; 
import pamoka3 from './files/pamoka3.ppt'; 
import pamoka4 from './files/pamoka4.ppt'; 

export default function Desimtokai() {
    return (
        <section id="Desimtokai" className="lessonSection">
            <h1>Dešimtokai</h1>
            <div className="lessonContainer">
                <h3>1 pamoka</h3>
                <ul>
                    <li>Pažintis su Codeblocks aplinka <a href={pamoka1} download="pamoka1" rel="noreferrer"> nuoroda. </a> </li>
                    <li>Pradinio kodo paaiškinimas <a href='https://www.youtube.com/watch?v=SgOtk8_4Q3o&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>Užduoties su cout paaiškinimas <a href='https://www.youtube.com/watch?v=X-MTE5WiK5g&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                </ul>
                
                <h3>2 pamoka</h3>
                <ul>
                    <li>Algoritmas ir jo savybės <a href={pamoka2} download="pamoka2" rel="noreferrer"> nuoroda, </a> <a href='https://www.youtube.com/watch?v=TTK6tBPHfeM&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>Ar gera jūsų logika <a href='http://www.kit-jobs.ru/psijapan-en.php' rel="noreferrer"> japonų IQ testas.  </a></li>                   
                </ul>

                <h3>3 pamoka</h3>
                <ul>
                    <li>Paprasti skaičiavimai ir kintamųjų tipai <a href={pamoka3} download="pamoka3" rel="noreferrer"> nuoroda, </a> <a href='https://www.youtube.com/watch?v=sfMWmtcerLs&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>Smalsiems (sveikojo tipo kintamieji) <a href='https://www.youtube.com/watch?v=Fh2VT1tk1Oc&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>Smalsiems (realiojo tipo kintamieji) <a href='https://www.youtube.com/watch?v=CVqXUamSNa8&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>                       
                </ul>

                <h3>4 pamoka</h3>
                <ul>
                    <li>Sveikųjų skaičių dalyba <a href={pamoka4} download="pamoka4" rel="noreferrer"> nuoroda, </a> <a href='https://www.youtube.com/watch?v=k2KOVf-QD1E&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>1 užduoties sprendimas<a href='https://www.youtube.com/watch?v=rvLjhamO9QA&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                </ul>

                
            </div>
        </section>
    );
}