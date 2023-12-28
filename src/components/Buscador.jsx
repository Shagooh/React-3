import Form from "react-bootstrap/Form";

export default function Buscador ({listColaboradores, setFiltro})  {
  let search = (e) => {

    if (e.target.value !== "") {
      setFiltro(listColaboradores);
  
      let results = [...listColaboradores].filter((colaborador) =>
        
        Object.values(colaborador).some((value) =>
          String(value).toLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      );
      setFiltro(results);
    }
  };

  return (
    <>
      <Form.Control
        placeholder="Search..."
        onChange={search}
      />
    </>
  );
}

