import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function ViewPerson(props) {
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);
  const location = useLocation();

  console.log("viewing person", { person, location });

  useEffect(() => {
    if (location.state) {
      const { person } = location.state;
      setPerson(person);
    }
  }, [location]);

  if (!person) return <div>Loading...</div>;

  return (
    <>
      <h1>View Profile</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <ul>
        <img src={person.picture.medium} alt="picture" />

        <li>
          Name: {person.name.first} {person.name.last}
        </li>
        <li>Gender: {person.gender}</li>
        <li>
          location: {person.location.city}, {person.location.country}
        </li>
      </ul>
      <Link to="/view/hire" state={{ person }}>
        Hire this person
      </Link>
    </>
  );
}

export default ViewPerson;
