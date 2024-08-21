import { useState } from "react";

export default function ListaProduto() {
const [listaProdutos, setProdutos] = useState([
      { id: 1, nome: 'Manga', preco: 'R$ 70,00' },
      { id: 2, nome: 'Manwa', preco: 'R$ 80,00' },
      { id: 3, nome: 'Anime', preco: 'R$ 50,00' }
    ]);
    const [listaPedidos, setPedidos] = useState([ ]);

    const [id2, setid] = useState(0)
    const adicionarProdutoPedido = (produto) => {  
        setPedidos([...listaPedidos, {prod: produto , ID: id2}]);
        setid(id2 + 1)
    }
    console.table(listaPedidos);
    const removeritem = (ID) => {  
        let listaAux = listaPedidos.filter((pedido)=> pedido.ID !== ID);
        setPedidos(listaAux)
    }
    console.table(listaPedidos);
    return (
        <div className="bloco-principal" >
            <h1>Produtos</h1>
            <div id="bloco-produtos" className="bloco-produtos">
                {
                  listaProdutos.map((produto)=> 
                      <div key={produto.id}>
                             <img src={produto.imagem}/>
                             <td>
                             {produto.id}
                             </td>
                             <td>
                                {produto.nome}
                             </td>
                             <td>
                                {produto.preco}
                             </td>
                            <p> { produto.item} </p>
                            <button id="bocor" onClick={() => adicionarProdutoPedido(produto)}>
                            Adicionar aos Favoritos
                            </button>
                      </div>
                  )}
                  
                      </div>
                      <div className="bloco-pedidos">
                          <p>Meus Favoritos</p>
                          {listaPedidos.map((pedido, index) => 
                              <div key={index}>
                                  <td>
                                    {pedido.nome}
                                    </td>
                                  <td>
                                     {pedido.preco}
                                     </td>
                              <td>
                                <button onClick={() => removeritem(pedido.id)}>Remover</button>
                              </td>
                              </div>
                          )}


                      </div>
                  </div>           
    );
}