import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from "../Header/Header";
import ListaProduto from "../ListaProduto";


export default function Produto() {
const [listaProdutos] = useState([
      { id: 111, nome: 'Kimetsu no Yaiba', preco: 'R$ 70,99', imagem: '/public/lista/imgmanga/1.png', Data: '14/09/2023', desconto: "40%", nota:'7.8/10'},
      { id: 222, nome: 'class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta', preco: 'R$ 80,99', imagem: '/public/lista/imgmanga/2.png', data: '01/12/2022', 
        desconto: "70%", nota:'5.1/10' },
      { id: 333, nome: 'Classroom of the Elite', preco: 'R$ 50,99', imagem: '/public/lista/imgmanga/3.png', data: '31/05/2009', desconto: "60%", nota:'10/10' },
      { id: 444, nome: 'Pokemon', preco: 'R$ 55,99', imagem: '/public/lista/imgmanga/4.png', data: '10/02/2023', desconto: '80%', nota:'9/10' },
      { id: 555, nome: 'niwatori fighter', preco: 'R$ 38,99', imagem: '/public/lista/imgmanga/5.png', data: '31/05/2004', desconto: "20%", nota:'5/10' },
      { id: 666, nome: 'Naruto', preco: 'R$ 62,99', imagem: '/public/lista/imgmanga/6.png', data: '15;06/2006', desconto: "30%", nota:'4/10' },
      { id: 777, nome: 'Dragão ball', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/7.png', dara: '19/04/2003', desconto: "40%", nota:'9/10' }
    ]);

    return (
        <>
        <Header/>
    
    <h1 className='pro'>Home Page</h1>
        <div className='carrotodo'>
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
            <ListaProduto lista={listaProdutos}/>
</>
       );
}