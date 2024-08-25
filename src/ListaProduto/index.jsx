
export default function ListaProduto({lista}){
    return(
        <>
        <div className="bloco-principal" >
        <br/>
        <div className="bloco-produtos">
            
        <div className="blo2">
                {    
                  lista.map((produto)=> 
                      <div key={produto.id}>
                    <div className="card">
                             <img className="listaimg" src={produto.imagem}/>
                             <td>
                             </td>
                             <div className="meio">
                             <p> Produto: {produto.nome}</p>
                             <p> Desconto: {produto.desconto}</p>
                             <p> Valor: {produto.preco}</p>
                             <p> Data: {produto.data}</p>
                             <p> Nota: {produto.nota}</p>
                            </div>
                            <button className="adicionar">Adicionar aos favoritos</button>
                      </div>
                      </div>
                  )}
                  </div>
                  </div>
                  </div>
        </>
    )
}