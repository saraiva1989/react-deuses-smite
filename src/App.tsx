import { useState } from 'react'
// import './App.css'
import { Tweet } from './componentes/Tweet';
import { Rotas } from './rotas';

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2'
  // ])

  // function criarTweet() {
  //   setTweets([...tweets, 'Tweet 666'])
  // }


  return (

    <div>
      <Rotas />

      {/* {
        tweets.map((element, index) => {
          return (
            <div key={index}>
              <Tweet texto={element} />
            </div>
          )
        })
      }
      <button onClick={criarTweet}
        style={{ background: '#fff333' }}
      >Adicionar Tweet</button> */}
    </div>

  );
}

export default App
