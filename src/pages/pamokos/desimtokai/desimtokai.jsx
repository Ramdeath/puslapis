import testFile from './files/testFile.txt'; // Failo importavimas (būtinas)
// pavyzdys: import failoPavadinimas from './files/failoPavadinimas.txt';

export default function Desimtokai() {
    return (
        <section id="Desimtokai" className="lessonSection">
            <h1>Dešimtokai</h1>
            <div className="lessonContainer">
                <h3>1-2 Pamoka</h3>
                <ul>
                    <li>
                        <a
                        href={testFile} // Importuotas failas
                        download="Example-File" // Failo pavadinimas (bet koks)
                        target="_blank" // Atsidarys naujame lange
                        rel="noreferrer" // Saugumo reikalas
                        >
                        Test download file from github
                        </a>
                    </li>
                    <li>asdf asdf asdf </li>
                </ul>

                <h3>3-4 Pamoka</h3>
                <ul>
                    <li>
                        <a
                        href='https://www.youtube.com/watch?v=7CqJlxBYj-M'
                        target="_blank"
                        rel="noreferrer">
                        Test youtube link
                    </a>
                    </li>
                    <li>List here</li>
                    <li>List here</li>
                    <li>List here</li>
                </ul>
            </div>
        </section>
    );
}