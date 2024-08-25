import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../Header";
import Footer from "../Footer";

export default function Produtos(){
  


    return(
        <>
        <Header/>
        <br/>
        <div className="Paginainicial">
        <h1 className="pro">Anime</h1>
        <div>
        <div className='carrotodo'>
        <Carousel className='carroce'
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}  
                showThumbs={false}
                dynamicHeight>
                    <div>
                    <Link to='/Ofertas'><button className="camin"><img src='public/lista/caminho/Anime.png'/></button></Link>
                    </div>
                    <div>
                    <Link to='/Produtos'><button className="camin"><img src='public/lista/caminho/Manga.png'/></button></Link>
                    </div>
                    <div>
                    <Link to='/Home'><button className="camin"><img src='public/lista/caminho/Manhwa.png'/></button></Link>
                    </div>
            </Carousel>
            </div>  
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
        </>
    )
}