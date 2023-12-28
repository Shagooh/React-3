import Button from "react-bootstrap/Button";

export default function Formulario ({setExito, setErrores, setFormValue, setListColaboradores, formValue, newDatabase}) {

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validName = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

  const sendForm = (submit) => {
    submit.preventDefault();
    
    if (formValue.name === "" && formValue.email === "" && formValue.age === "" && formValue.position === "" && formValue.phone === "") {
      return setErrores("Complete all the fields"), setExito("");

    } else if (formValue.name === "") {
      return setErrores("Put a name");
      
    } else if (!validName.test(formValue.name)) {
      return setErrores("Name format invalid (only letters)");
      
    } else if (formValue.email === "") {
      return setErrores("Email can not be empty");
      
    } else if (!validEmail.test(formValue.email)) {
      return setErrores("Email format invalid");

    } else if (formValue.age === "") {
      return setErrores("Age can not be empty");

    } else if (formValue.position === "") {
      return setErrores("Position can not be empty");

    } else if (formValue.phone.length < 9) {
      return setErrores("Phone not valid (9 digits)");

    } else {
      setErrores("");
      setExito("User registered successfully");
    }

    setFormValue({name: "", email: "", age: "", position: "", phone: ""});
    setErrores("");
    return setListColaboradores(newDatabase)
  };

  const updateForm = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        className="formulario"
        onSubmit={(e) => sendForm(e)}
      >
        <h1>Add collaborator</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formValue.name}
          onChange={updateForm}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formValue.email}
          onChange={updateForm}
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={formValue.age}
          onChange={updateForm}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={formValue.position}
          onChange={updateForm}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={formValue.phone}
          onChange={updateForm}
        />
        
        <Button type="submit">Add collaborator</Button>
      </form>
    </div>
  );
}

