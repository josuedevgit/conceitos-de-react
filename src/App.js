import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import HedyLamarr from './components/HedyLamarr';

function App() {

  
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Josias" />
      <Pessoa
        url="https://avatars.githubusercontent.com/u/109594019?v=4"
        nome="Josué"
        idade="32"
        profissao="Jogador de futebol"
      />

      <HedyLamarr />

    </div>
  );
}

export default App;
