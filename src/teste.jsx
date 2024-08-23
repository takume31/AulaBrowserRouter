export default function Home() {
    
    return(
    <div className='cabeca'> 
        <div className='cabe'>
        <img className='cabeimg' src='../../public/lista/imgcabe/image.png'/>
        <h3 className='titulo'>Animes Online</h3>
        <div className='tese'>
        <h3 className='tag'>Inicio</h3>
        <h3 className='tag'>Lançamentos</h3>
        <h3 className='tag'>Genero</h3>
        </div>
    </div>
        <h1 className='pag'>Home Page</h1>
        <Carousel className='carroce'
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}  
                showThumbs={false}
                dynamicHeight>
                    <div id='carro'>
                    <img id='testeimg' src='public/lista/carrocelAnime/1.png'/>
                    </div>
                    <div id='carro'>
                    <img id='testeimg' src='public/lista/carrocelAnime/2.png'/>
                    </div>
                    <div id='carro'>
                    <img id='testeimg' src='public/lista/carrocelAnime/3.png'/>
                    </div>
      
            </Carousel>
    </div>
    )
}   