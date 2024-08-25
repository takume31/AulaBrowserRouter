import { useState } from "react"
import ListaProduto from "../ListaProduto";
import Header from "../Header";
import Carousel from "../Carrossel";
import Footer from "../Footer";

export default function Produtos(){
    const [produtosGerais] = useState([
        { id: 111, nome: 'Kimetsu no Yaiba', preco: 'R$ 70,99', imagem: '/public/lista/imgmanga/1.png', Data: '14/09/2023', desconto: "40%", nota:'7.8/10'},
        { id: 222, nome: 'class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta', preco: 'R$ 80,99', imagem: '/public/lista/imgmanga/2.png', data: '01/12/2022', 
          desconto: "70%", nota:'5.1/10' },
        { id: 333, nome: 'Classroom of the Elite', preco: 'R$ 50,99', imagem: '/public/lista/imgmanga/3.png', data: '31/05/2009', desconto: "60%", nota:'10/10' },
        { id: 444, nome: 'Pokemon', preco: 'R$ 55,99', imagem: '/public/lista/imgmanga/4.png', data: '10/02/2023', desconto: '80%', nota:'9/10' },
        { id: 555, nome: 'niwatori fighter', preco: 'R$ 38,99', imagem: '/public/lista/imgmanga/5.png', data: '31/05/2004', desconto: "20%", nota:'5/10' },
        { id: 666, nome: 'Naruto', preco: 'R$ 62,99', imagem: '/public/lista/imgmanga/6.png', data: '15;06/2006', desconto: "30%", nota:'4/10' },
        { id: 777, nome: 'Dragão ball', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/7.png', dara: '19/04/2003', desconto: "40%", nota:'9/10' },
        { id: 888, nome: 'Sword Art Online', preco: 'R$ 70,99', imagem: '/public/lista/imgmanga/8.png', Data: '14/09/2023', desconto: "40%", nota:'7.8/10'},
        { id: 999, nome: 'Bulo no Hero', preco: 'R$ 80,99', imagem: '/public/lista/imgmanga/9.png', data: '01/12/2022', 
          desconto: "70%", nota:'5.1/10' },
        { id: 101010, nome: 'Sakura Soul', preco: 'R$ 50,99', imagem: '/public/lista/imgmanga/10.png', data: '31/05/2009', desconto: "60%", nota:'10/10' },
        { id: 111111, nome: 'Odd Taxi', preco: 'R$ 55,99', imagem: '/public/lista/imgmanga/11.png', data: '10/02/2023', desconto: '80%', nota:'9/10' },
        { id: 121212, nome: 'Your Name', preco: 'R$ 38,99', imagem: '/public/lista/imgmanga/12.png', data: '31/05/2004', desconto: "20%", nota:'5/10' },
        { id: 131313, nome: 'Arifureta', preco: 'R$ 62,99', imagem: '/public/lista/imgmanga/13.png', data: '15;06/2006', desconto: "30%", nota:'4/10' },
        { id: 141414, nome: 'death note', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/14.png', dara: '19/04/2003', desconto: "40%", nota:'9/10' },
        { id: 151515, nome: 'One Piece', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/15.png', dara: '19/04/2003', desconto: "40%", nota:'9/10' }
    ])


    return(
        <>
        <Header/>
        <br/>
        <h1 className="pro">Manga</h1>
        <Carousel/>
        <br/>
        <br/>
        <ListaProduto lista={produtosGerais}/>
        <Footer/>
        </>
    )
}