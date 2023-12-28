import Alert from "react-bootstrap/Alert";

export default function FormAlert ({variant, exito, errores}) {

  return (
    <>
      <Alert className="bootstrap-alert" variant={variant}> {exito}{errores} </Alert>
    </>
  );
}

