import { Link } from "react-router-dom";
import PeopleListItem from "./PeopleListItem";

function PeopleList(props) {
  const { people, hiredPeople } = props;

  console.log("people props:", people);

  if (!people) return <div>Loading...</div>;

  return (
    <ul>
      {people.map((person, index) => (
        <Link to={`/view/${person.name?.first}`} state={{ person }}>
          <PeopleListItem key={index} person={person} />
        </Link>
      ))}
    </ul>
  );
}

export default PeopleList;
