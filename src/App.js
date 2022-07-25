import { useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./styles.css";

import Dashboard from "./pages/Dashboard";
import PeopleListItem from "./pages/Dashboard/components/PeopleListItem";
import ViewPerson from "./pages/PersonProfile/components/ViewPerson";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route path="/view/:id" element={<ViewPerson />} />
      </Routes>
    </>
  );
}
