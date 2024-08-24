import React from "react";
import Livro from "../../interfaces/livro.interface";

interface IListaLivrosProps {
  livros: Array<Livro>;
}

export const ListaLivros: React.FC<IListaLivrosProps> = ({livros}: IListaLivrosProps) => {
  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {livros.map((livro) => (
          <li key={livro.id}>
            <strong>{livro.titulo}</strong> - {livro.autor}
          </li>
        ))}
      </ul>
    </div>
  );
};
