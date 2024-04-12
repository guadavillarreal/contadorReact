import Informacion from "./components/Informacion";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <section>
      <h1 className="display-3 text-center">Proyecto de React</h1>
      <Informacion></Informacion>
      <Informacion/>
    </section>
  );
}

export default App;
