import { Link } from "react-router-dom";

export default function Home() {
    return(
    <div>
        <h1>Home Page</h1>
            <ol  type="site">
                <ul>
                <Link to='/Listaproduto'>ListaProdutos</Link>
                </ul>
                <ul>
                <Link to='/Header'>Header</Link>
                </ul>
                </ol>
    </div>
    )
}