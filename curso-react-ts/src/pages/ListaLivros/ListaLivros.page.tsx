import { Container, List } from "@mui/joy";
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useCallback, useEffect, useState } from "react";
import Livro from "../../interfaces/livro.interface";


export const ListaLivros = () => {
  const [livros, setLivros] = useState<Livro[]>()
  const fetchBooks = useCallback(async () => {
    fetch('https://potterapi-fedeperin.vercel.app/pt/books').then(async (res) => 
      res.json()
    ).then((books) => {
      setLivros(books)
    }).catch((error) => {
      console.log("Erro ao buscar os livros", error)
    })
  }, [])

  useEffect(() => {
    fetchBooks()
  }, [])

  if (livros?.length === 0) {
    return (
      <div>
        <p>Nenhum livro encontrado</p>
      </div>
    )
  }
  
  return (
    <main>
      <Container>
      <h2>Lista de Livros</h2>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {livros?.length ?
          livros.map((livro) => (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={livro.cover}  sx={{ width: 56, height: 56 }} />
              </ListItemAvatar>
              <ListItemText
                primary={livro.title}
                secondary={
                  <p>{livro.releaseDate}</p>
                }
              />
            </ListItem>
          ))
          : (
            <div>
              <p>Nenhum livro encontrado</p>
            </div>
          )
        }

      </List>
      </Container>
    </main>
  );
};