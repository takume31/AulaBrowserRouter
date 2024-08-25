import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function carousel(){
    return (
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
                    <img src='public/lista/carrocelAnime/1.png'/>
                    </div>
                    <div>
                    <img src='public/lista/carrocelAnime/2.png'/>
                    </div>
                    <div>
                    <img src='public/lista/carrocelAnime/3.png'/>
                    </div>
            </Carousel>
            </div>  
            </div>
    )
}
