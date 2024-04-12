{/*llamado a la hoja de componentes para poder utilizarlo*/}
import Informacion from "./components/Informacion";
//link de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section>
      <h1 className="display-3 text-center">Proyecto de React</h1>
      {/*llamado al componente, se los puede utilizar la canitdad de veces que deseemos */}
      <Informacion></Informacion>
      {/*llamado al componente */}
      <Informacion />
    </section>
  );
}

export default App;
