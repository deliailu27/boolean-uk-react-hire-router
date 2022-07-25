import { Link } from "react-router-dom";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people } = props;

  console.log("people list", people);
  return (
    <ul>
      {people.map((person, index) => (
        <Link to={`/view/${person.id}`} state={{ person }}>
          <PeopleListItem key={index} person={person} />
        </Link>
      ))}
    </ul>
  );
}

export default PeopleList;
