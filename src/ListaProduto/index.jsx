
export default function ListaProduto({lista}){
    return(
        <>
        <div className="bloco-principal" >
        <br/>
        <div id="bloco-produtos" className="bloco-produtos">
            
        <div className="blo2">
                {
                  lista.map((produto)=> 
                      <div key={produto.id}>
                    <div className="card">
                             <img className="listaimg" src={produto.imagem}/>
                             <td>
                             </td>
                             <div className="meio">
                             <p> id: {produto.id}</p>
                             <p> Produto: {produto.nome}</p>
                             <p> Valor: {produto.preco}</p>
                            </div>
                            <button className="butico">Adicionar aos favoritos</button>
                      </div>
                      </div>
                  )}
                  </div>
                  </div>
                  </div>
        </>
    )
}