//(props): indica que recibe un props declarado donde fue llamado
const Informacion = (props) => {
  //aaqui va la logica del componente, codigo de js
  return (
    //puede ir un poco de logica
    //<> </>: fragmen: para poner dos porciones de codigos
    <>
    {/*{props.comision} : indica que props quiero agregar ahi*/}
      <h2>Conceptos de React {props.comision}</h2>
      <section>
        {/*aqui va todo el maquetado del componente*/}
        <p>
          React es una biblioteca JavaScript de código abierto para crear
          interfaces de usuario interactivas. Es una herramienta popular para el
          desarrollo web front-end, utilizada por empresas como Facebook,
          Instagram y Netflix. React se basa en una arquitectura de componentes,
          lo que facilita la creación de interfaces de usuario reutilizables y
          modulares. Los componentes se definen como clases o funciones que
          encapsulan el código HTML, CSS y JavaScript necesario para renderizar
          una parte de la interfaz de usuario. <br/> comision: {props.anioActualProps}
        </p>
      </section>
    </>
  );
};

export default Informacion;
