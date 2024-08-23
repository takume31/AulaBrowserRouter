import { useState } from "react";

export default function ListaProduto() {
const [listaProdutos, setProdutos] = useState([
      { id: 111, nome: 'Kimetsu no yaba', preco: 'R$ 70,99', imagem: '/public/lista/imgmanga/1.png', ofertas: '50,00' },
      { id: 222, nome: 'class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta', preco: 'R$ 80,99', imagem: '/public/lista/imgmanga/2.png', ofertas: '0' },
      { id: 444, nome: 'Pokemon', preco: 'R$ 55,99', imagem: '/public/lista/imgmanga/4.png', ofertas: '50,00' },
      { id: 666, nome: 'Naruto', preco: 'R$ 62,99', imagem: '/public/lista/imgmanga/6.png', ofertas: '30,00' },
      { id: 777, nome: 'Dragão ball', preco: 'R$ 91,99', imagem: '/public/lista/imgmanga/7.png', ofertas: '80,00' }
    ]);

    
    console.table(listaProdutos);
    return (
        
        <div className="bloco-principal" >
            
            <h1 className="pro">Produtos</h1>
            <br/>
            <div className="blo2">
            <div id="bloco-produtos" className="bloco-produtos">
                {
                  listaProdutos.map((produto)=> 
                      <div key={produto.id}>
                    <div className="card">
                             <img className="listaimg" src={produto.imagem}/>
                             <td>
                             </td>
                             <div className="meio">
                             <p> id: {produto.id}</p>
                             <p> Produto: {produto.nome}</p>
                             <p> Valor: {produto.ofertas}</p>
                            
                            </div>
                      </div>
                      </div>
                  )}
                  </div>
                      </div>

                  </div>           
    );
}