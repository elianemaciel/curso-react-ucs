import React from "react";
import Livro from "../../interfaces/livro.interface";

interface IListaLivrosProps {
  livros: Array<Livro>;
}

export const ListaLivros: React.FC<IListaLivrosProps> = ({livros}: IListaLivrosProps) => {
  
  if (livros.length === 0) {
    return (
      <div>
        <p>Nenhum livro encontrado</p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.length ?
          livros.map((livro) => (
            <li key={livro.id}>
              <strong>{livro.titulo}</strong> - {livro.autor}
            </li>
          ))
          : (
            <div>
              <p>Nenhum livro encontrado</p>
            </div>
          )
        }


      </ul>
    </div>
  );
};
