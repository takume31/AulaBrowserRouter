import { useState } from "react"
import ListaProduto from "../ListaProduto";
import Carrocel from '../Oferta/index';
import Header from "../Header/Header";
export default function Produtos(){
    const [produtosGerais] = useState([
        { id: 111, nome: 'Kimetsu no Yaiba', preco: 'R$ 70,99', imagem: '/public/lista/imgmanga/1.png', ofertas: '50,00', desconto: "40%", nota:'7.8/10'},
      { id: 222, nome: 'class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta', preco: 'R$ 80,99', imagem: '/public/lista/imgmanga/2.png', ofertas: '0' },
      { id: 333, nome: 'Classroom of the Elite', preco: 'R$ 50,99', imagem: '/public/lista/imgmanga/3.png', ofertas: '50,99' },
      { id: 444, nome: 'Pokemon', preco: 'R$ 55,99', imagem: '/public/lista/imgmanga/4.png', ofertas: '50,00' },
      { id: 555, nome: 'niwatori fighter', preco: 'R$ 38,99', imagem: '/public/lista/imgmanga/5.png', ofertas: '38,99' },
      { id: 666, nome: 'Naruto', preco: 'R$ 62,99', imagem: '/public/lista/imgmanga/6.png', ofertas: '30,00' },
      { id: 777, nome: 'Dragão ball', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/7.png', ofertas: '80,00' },
    ])


    return(
        <>
        <Header/>

        <br/>
        <ListaProduto lista={produtosGerais}/>
        </>
    )
}