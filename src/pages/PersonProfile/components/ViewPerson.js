import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function ViewPerson() {
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  console.log("viewing person", { person, location });
  return (
    <>
      <h1>View Profile</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <ul>
        <li>Name: </li>
        <li>Gender:</li>
        <li>location:</li>
      </ul>
    </>
  );
}

export default ViewPerson;
