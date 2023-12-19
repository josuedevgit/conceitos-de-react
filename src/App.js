import logo from './logo.svg';
import './App.css';

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
  imageRadius: 50,
}

function App() {
  return (
    <div className="App">
      {/*<h1>Meu primeiro projeto riéqueti</h1>
      <p>Hello darkness, my old friend</p>*/}

      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: user.imageRadius + "%"
        }}

      ></img>

    </div>
  );
}

export default App;
