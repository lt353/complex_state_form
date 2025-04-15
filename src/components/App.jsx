import react, {useState} from "react";

function App () {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setContact(prevContact => {
      return {
        ...prevContact,
        [name]: value
      }
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevContact.lName,
      //     email: prevContact.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevContact.fName,
      //     lName: value,
      //     email: prevContact.email
      //   };
      // } else {
      //   return {
      //     fName: prevContact.fName,
      //     lName: prevContact.lName,
      //     email: value
      //   };
      // }
    });
  }

  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lname}</h1>
      <p>{contact.email}</p>
      <form>
        <input 
          value={contact.fName}
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
        />
        <input
          value={contact.lName}
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
        />
        <input
          value={contact.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;
