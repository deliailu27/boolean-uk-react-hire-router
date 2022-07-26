import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

function HireForm({ hireDataCallBack }) {
  const [wage, setWage] = useState(0);
  const [Person, setHiredPerson] = useState({});

  /*const location = useLocation();
  const { person } = location.state;
  
  console.log(person);*/

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      console.log("person", person);
      setHiredPerson(person);
    }
  }, [location]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const thisPerson = { ...Person, wage };
    console.log("this person", thisPerson);
    hireDataCallBack(thisPerson);
    console.log("hiredperson:", Person);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}

export default HireForm;
