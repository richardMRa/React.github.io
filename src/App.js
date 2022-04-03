import ClassComponent from './components/Historia.jsx';
import data from './json/data.json';
//import  from './components/Opciones.jsx';

function App() {

  const getData = () => {
    return data.map((ele) => {
      return (
        {
          id: ele.id,
          historia: ele.historia,
          opciones: {
            a: ele.opciones.a,
            b: ele.opciones.b
          }
        }
  
      );
    });
  }
  

  return (
    <div className="App">
      <ClassComponent historiaArray={getData()} />
      
    </div>
  );
}

export default App;
