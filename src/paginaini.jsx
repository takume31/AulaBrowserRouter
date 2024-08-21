import { Link } from "react-router-dom";

export default function Home() {
    return(
    <div>
        <h1>Home Page</h1>
            <ol  type="site">
                <ul>
                <h3><Link to='/Listaproduto'>ListaProdutos</Link></h3>
                </ul>
                <ul>
                <h3><Link to='/Header'>Header</Link></h3>
                </ul>
                <ul>
                <h3><Link to='/Home'>Home</Link></h3>
                </ul>
                </ol>
    </div>
    )
}