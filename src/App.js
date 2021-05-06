import './App.css';
import  sensores  from "./fichero.json"; //Lectura del fichero
import { LineGraphics } from './LineGraphics'; //Componente grafico personalizado
import { ColumnGraphics } from './ColumnGraphics';

function App() {

  const info = () => {
    console.log('datos',sensores)   
    };   
      
  return (
    <div className="App">
      <h1>UJI Motor Sport</h1>
      {info()}
      <h2>Temperatura Motor</h2>
      <LineGraphics loading={false} title={'LineGraphics'} datos={sensores} x={'Time'} y={'Dato'} />
      <ColumnGraphics loading={false} title={'ColumnGraphics'} datos={sensores} x={'Time'} y={'Dato'} />
    </div>
  );
}

export default App;
