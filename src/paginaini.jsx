import { Link } from "react-router-dom";

export default function Homepage() {
    return(
    <>
        <h1>Home Page</h1>
                
                <h3><Link to='/Listaproduto'>ListaProdutos</Link></h3>
                
                <h3><Link to='/Fotter'>Footerw</Link></h3>
                
                <h3><Link to='/Home'>Home</Link></h3>
                
                <h3><Link to='/Ofertas'>Ofertas</Link></h3>
    </>
    )
}