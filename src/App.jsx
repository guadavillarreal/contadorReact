{/*llamado a la hoja de componentes para poder utilizarlo*/}
import Contador from "./components/Contador";
import Informacion from "./components/Informacion";
//link de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const anioActual =2023;
  return (
    <section className="container">
      <h1 className="display-3 text-center">Proyecto de React</h1>
      {/*llamado al componente, se los puede utilizar la canitdad de veces que deseemos */}
    {/*   <Informacion></Informacion>*/}
      {/*</Informacion> :llamado al componente */}
      {/* comision="c76i" anioActualProps={anioActual}/>: envio de props, solo en las string va con comillas las var con {} */}
      {/* Los props son inmutables */}
      <Informacion comision="c76i" anioActualProps={anioActual}/> 
      <Contador/>{/*etiqueta simple*/}
    </section>
  );
}

export default App;
