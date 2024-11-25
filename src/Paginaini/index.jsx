import { useState } from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../Header";

export default function Produtos(){
    const [gmail, setGmail] = useState(""); 
    const [senha, setSenha] = useState("");

  const [Listasalva, setlistasalva] = useState([]);
    const salvarcontatos = (event) => {
        event.preventDefault();
        setlistasalva([...Listasalva, 
            {
                Gmailsalvo: gmail,
                Senhasalvo: senha
            }
        ]);
    }
    console.table = Listasalva
  
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
            <br/>
            <div className="cada">
                <div className="ite">
                    
            <label htmlFor="gma">Gmail:  </label>
                <input type="gma" name="" id="" onChange={(event)=> setGmail(event.target.value)}/>
                <br/>
                {gmail}
            <br/>
            <br/>
            
            <label htmlFor="sen">Senha:  </label>
            <input type="sen" name="" id="" onChange={(event)=> setSenha(event.target.value)}/>
            <br/>
                {senha}
            <br/>
            <br/>
            <center>
            <button onClick={salvarcontatos}>SALVAR</button>
            </center>
            {
                Listasalva.map((contato, index) =>
            <div key={index}>
                <div className="lista">
                <p> Gmail: {contato.Gmailsalvo} </p>
                <p> senha: {contato.Senhasalvo} </p>
                </div>
                </div>
            )}
            </div>
            </div>
        </div>
        <br/>
        <br/>
        <Footer/>
        </>
    )
}
