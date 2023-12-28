import baseColaboradores from "./data/Colaboradores";
import Buscador from "./components/Buscador";
import FormAlert from "./components/Alert";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [errores, setErrores] = useState(false);
  const [exito, setExito] = useState("");
  const [listColaboradores, setListColaboradores] = useState(baseColaboradores);
  const [formValue, setFormValue] = useState({
    name: "", email: "", age: "", position: "", phone: ""
  });

  const newDatabase = [...listColaboradores, formValue];
  const [filtro, setFiltro] = useState("")

  return (
    <div className="container">
      <div className="listado">

        <h1>List of collaborators</h1>

        <Buscador
          listColaboradores={listColaboradores}
          setFiltro={setFiltro}
        ></Buscador>

        <Listado
          listColaboradores={listColaboradores}
          filtro={filtro}
        ></Listado>
      </div>

      <div>
        <Formulario
          setListColaboradores={setListColaboradores}
          setExito={setExito}
          setErrores={setErrores}
          newDatabase={newDatabase}
          formValue={formValue}
          setFormValue={setFormValue}
        ></Formulario>
        {errores ? ( <FormAlert variant="danger" errores={errores} setErrores={setErrores} ></FormAlert> ) : null}
        {exito ? ( <FormAlert variant="success" exito={exito} setExito={setExito}></FormAlert>) : null}
      </div>
    </div>
  );
}

export default App;