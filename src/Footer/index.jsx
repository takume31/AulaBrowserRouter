import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function Home() {
    
    return(
        
    <div>
        <h1>Home Page</h1>
        <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}  
                showThumbs={false}
                dynamicHeight>
                <div>
                    <div id='carro'>
                    <img id='testeimg' src='../lista/CarrocelAnime/image.png'/>
                    </div>
                    <div id='carro'>
                    <img id='testeimg' src='../lista/CarrocelAnime/image.png'/>
                    </div>
                </div>
      
            </Carousel>
    </div>
    )
}