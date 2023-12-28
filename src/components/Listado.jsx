import Table from "react-bootstrap/Table";

export default function Listado ({listColaboradores, filtro}){

  return (
    <div className="table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Position</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filtro !== "" ? filtro.map((e, index) => (
                <tr key={index}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.age}</td>
                  <td>{e.position}</td>
                  <td>{e.phone}</td>
                </tr>
              )) : listColaboradores.map((colaborador, index) => (
                <tr key={index}>
                  <td>{colaborador.name}</td>
                  <td>{colaborador.email}</td>
                  <td>{colaborador.age}</td>
                  <td>{colaborador.position}</td>
                  <td>{colaborador.phone}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
}
