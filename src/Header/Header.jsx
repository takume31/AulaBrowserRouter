import {link} from "react-router-dom";

export default function Header(){
    return(
        <>
        <nav>
            <ul>
                <link to="/home">
                 <li>Home</li>
                </link>
                <link to="/oferta">
                 <li>Oferta</li>
                </link>
            </ul>
        </nav>
        <h1>Teste</h1>
        </>
    );
}