import React from 'react';
import {Button, Container} from './styles'
import Image from './img/pessoas.png'

function App() {
  const [coment, setComent] = React.useState();
  const [allComents, setAllComents] = React.useState([]);

  function hadleTextArea(event) {
    setComent(event.target.value);
  }

  function hadleClickButton(event) {
    setAllComents([...allComents, coment]);
    setComent('')
  }

  return (
    <Container>
      <img src={Image} alt='pessoas'></img>
      <textarea placeholder='Comentario' value={coment} onChange={hadleTextArea}></textarea>
      <Button $ison={coment} onClick={hadleClickButton}>Comentar</Button>
      <ul>
        {allComents.map((comentLi, index) => (
          <li key={index}>{comentLi}</li>
        ))}
      </ul>
    </Container>
  );
}

export default App;
