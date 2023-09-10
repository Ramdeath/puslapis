import pamoka1 from './files/pazintis_su_codeblocks1.ppt'; // Failo importavimas (būtinas)
import pamoka2 from './files/pamoka2.ppt'; 

export default function Desimtokai() {
    return (
        <section id="Desimtokai" className="lessonSection">
            <h1>Dešimtokai</h1>
            <div className="lessonContainer">
                <h3>1 pamoka</h3>
                <ul>
                    <li>Pažintis su Codeblocks aplinka <a href={pamoka1} download="pamoka1" rel="noreferrer"> nuoroda. </a> </li>
                    <li>
                        Pradinio kodo paaiškinimas <a href='https://www.youtube.com/watch?v=SgOtk8_4Q3o&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a>
                    </li>
                    <li>
                        Užduoties su cout paaiškinimas <a href='https://www.youtube.com/watch?v=X-MTE5WiK5g&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a>
                    </li>
                </ul>

                
                <h3>2 pamoka</h3>
                <ul>
                    <li>Algoritmas ir jo savybės <a href={pamoka2} download="pamoka2" rel="noreferrer"> nuoroda, </a> <a href='https://www.youtube.com/watch?v=TTK6tBPHfeM&ab_channel=RamunasLiuokaitis' rel="noreferrer"> video.  </a></li>
                    <li>
                        Ar gera jūsų logika <a href='http://www.kit-jobs.ru/psijapan-en.php' rel="noreferrer"> japonų IQ testas.  </a>
                    </li>                   
                </ul>

                
            </div>
        </section>
    );
}