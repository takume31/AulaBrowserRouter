import { useState } from "react";

export default function ListaProduto() {
const [listaProdutos, setProdutos] = useState([
      { id: 111, nome: 'Kimetsu no yaba', preco: 'R$ 70,99', imagem: '/src/lista/imgmanga/1.png' },
      { id: 222, nome: 'class-no-daikirai-na-joshi-to-kekkon-suru-koto-ni-natta', preco: 'R$ 80,99', imagem: '/src/lista/imgmanga/2.png' },
      { id: 333, nome: 'Classroom of the Elite', preco: 'R$ 50,99', imagem: '/src/lista/imgmanga/3.png' },
      { id: 444, nome: 'Pokemon', preco: 'R$ 55,99', imagem: '/src/lista/imgmanga/4.png' },
      { id: 555, nome: 'niwatori fighter', preco: 'R$ 38,99', imagem: '/src/lista/imgmanga/5.png' },
      { id: 666, nome: 'Naruto', preco: 'R$ 62,99', imagem: '/src/lista/imgmanga/6.png' },
      { id: 777, nome: 'Dragão ball', preco: 'R$ 91,99', imagem: '/src/lista/imgmanga/7.png' }
    ]);
    const [listaPedidos, setPedidos] = useState([
    ]);

    const adicionarProdutoPedido = (produto) => {  
        setPedidos([...listaPedidos, produto]);
    }
    console.table(listaPedidos);
    const removeritem = (id) => {  
        let listaAux = listaPedidos.filter((pedido)=> pedido.id !== id);
        setPedidos(listaAux)
    }
    
    console.table(listaPedidos);
    return (
        <div className="bloco-principal" >
            <h1>Produtos</h1>
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
                             <p> Valor: {produto.preco}</p>
                            <button className="bocor" onClick={() => adicionarProdutoPedido(produto)}>
                            Adicionar aos Favoritos
                            </button>
                            </div>
                      </div>
                      </div>
                  )}
                  </div>
                      </div>
                      <div className="bloco-pedidos">
                          <p className="favo">Meus Favoritos</p>
                          {listaPedidos.map((pedido, index) => 
                              <div key={index}>
                                    {pedido.nome}
                                     {pedido.preco}
                                <button className="bocor" onClick={() => removeritem(pedido.id)}>Remover</button>
                              </div>
                          )}

                      </div>
                  </div>           
    );
}