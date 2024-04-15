{
  /*Para usar estado dentro del componente */
}
//import { useState } from "react"; : import de hoop
import { useState } from "react";
const Contador = () => {
  //*siempre aqui la logica de mi componente */
  //numero nombre de mi estado ,setNumero nombre del estado/ useState inicializa cualquier tipo de dato
const [numero, setNumero] = useState(10);
  //  let numero = 10;
  //si creo funciones grandes la tengo que declarar aqui*/

  return (
    <article className="text-center">
      <h2>Contador</h2>
      {/*{numero} agrego la variable al maquetado */}
      <p>{numero}</p>
      {/*si creo funciones pequeña la puedo declarar aqui dentro de las {} del evento*/}
      <button
        className="btn btn-primary"
        onClick={() => {
          {/*setNumero(numero+1); :setNumero indica que el componente va a cambiar;numero+1: que componente  y como*/}
          setNumero(numero+1);
          // console.log(numero);
        }}
      >
        +1
      </button>
      {/*todo:agreguen un btn para decrementaren -1el valos del state */}
    </article>
  );
};

export default Contador;
