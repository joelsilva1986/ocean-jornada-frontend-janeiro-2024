import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card/Card'


function App() {
  //Carregamento de dados direto via código

  // const item1 = {
  //   name: "Rick Sanchez",
  //   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  // }

  // const item2 = {
  //   name: 'Morty Smith',
  //   image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  // }

  // const item3 = {
  //   name: 'Summer Smith',
  //   image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  // }

  // const item4 = {
  //   name: 'Beth Smith',
  //   image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  // }
 
  // const itens = [item1, item2, item3, item4];

  const [itens, setItens] = useState([]);

  

  //Carregamento de dados via API
  async function carregarDadosApi() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/';

      //preparar a Requisição
      const response = await fetch(apiUrl);

      //Etrair a propriedade do body
      //Essa propriedade contém a lista de itens
      const body = await response.json();

      const results = body.results;
  
      setItens(results)
  }

  useEffect( function () {
    //Chamando a função que carrega os dados da API
    carregarDadosApi();
  },[])

 
  return (
    <>
    <div className="cards">
      {itens.map((item, i)=> <Card item={item} key={i} />)}
    </div>
    </>
  )
}

export default App
