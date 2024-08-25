import { Link } from "react-router-dom"
export default function Header(){

    return(
        <div>
        <div className='cabeca'> 
        <div className='cabe'>
        <img className='cabeimg' src='../../public/lista/imgcabe/image.png'/>
        <div className='tese'>
            
           <nav class="cabeçalho">
     <div class="navbar">
       <p>logo</p>
   <button class="botao">Menu</button>
     </div>
     <div>
        <ul class="navbar-lista">
        <div className="teste1">
        <Link to='/'><h3 className='titulo'>Animes Online</h3></Link>
        </div>
        <div className="teste2">
        <Link to='/Produtos'><h3 className='tag'>Manga</h3></Link>
        </div>
        <div className="teste3">
        <Link to='/Ofertas'><h3 className='tag'>Anime</h3></Link>
        </div>
        <div className="teste4">
        <Link to='/Home'><h3 className='tag'>Manhwa</h3></Link>
        </div>
     </ul>
     </div>
   </nav>
   
        </div>
    </div>
    </div>
        
        </div>
        
    )

}
    