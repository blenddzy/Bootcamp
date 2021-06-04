import './App.css';
import Mensaje from './Mensaje.js'



function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='estamos trabajando' />
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='cyan' message='de react' />
      <Mensaje />
    </div>
  );
}

export default App;
