import { useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./styles.css";

import Dashboard from "./pages/Dashboard";
import PeopleListItem from "./pages/Dashboard/components/PeopleListItem";
import ViewPerson from "./pages/PersonProfile/components/ViewPerson";
import HireForm from "./pages/PersonProfile/components/HireForm";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  function hireDataCallBack(newHiredPerson) {
    console.log("new hire", newHiredPerson);
    const updateHired = [...hiredPeople];
    updateHired.push(newHiredPerson);
    setHiredPeople(updateHired);
  }
  console.log("hired people", hiredPeople);

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
        <Route
          path="/view/hire"
          element={<HireForm hireDataCallBack={hireDataCallBack} />}
        />
      </Routes>
    </>
  );
}
