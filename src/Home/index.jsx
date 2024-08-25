import { useState } from "react";
import Header  from "../Header/index";
import ListaProduto from "../ListaProduto";
import Carousel from "../Carrossel/index";
import Footer from "../Footer";

export default function Produto() { 
const [listaProdutos] = useState([
  { id: 111, nome: 'The Heroine Had an Affair with My Fiance', preco: 'R$ 70,99', imagem: '/public/lista/imgmanhwa/1.png', Data: '14/09/2023', desconto: "40%", nota:'7.8/10'},
  { id: 222, nome: 'Se você não souber o Romance, você Morrerá!', preco: 'R$ 80,99', imagem: '/public/lista/imgmanhwa/2.png', data: '01/12/2022', 
    desconto: "70%", nota:'5.1/10' },
  { id: 333, nome: 'Lábios afiados como uma Faca', preco: 'R$ 50,99', imagem: '/public/lista/imgmanhwa/3.png', data: '31/05/2009', desconto: "60%", nota:'10/10' },
  { id: 444, nome: 'Meus Parentes estão Obcecados Por Mim', preco: 'R$ 55,99', imagem: '/public/lista/imgmanhwa/4.png', data: '10/02/2023', desconto: '80%', nota:'9/10' },
  { id: 555, nome: 'Transformando um Cachorro Louco em um Gentil Lorde!', preco: 'R$ 38,99', imagem: '/public/lista/imgmanhwa/5.png', data: '31/05/2004', desconto: "20%", nota:'5/10' },          
]);

return (
  <>
  <Header/>
  <br/>
  <h1 className='pro'>Manhwa</h1>
    <Carousel/>
    <br/>
      <ListaProduto lista={listaProdutos}/>
      <Footer/>
</>
 );
}