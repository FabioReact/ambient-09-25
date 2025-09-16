import { useState } from "react";
import LearnUseState from "./pages/learning/LearnUseState";
import HeroesList from "./pages/HeroesList/HeroesList";
import LearnUseEffect from "./pages/learning/LearnUseEffect";

function App() {
  const [alignmentFilter, setAlignmentFilter] = useState("good");

  const heroes = [{ id: 1, name: "Batman", alignment: "good" }, { id: 2, name: "Joker", alignment: "bad" }, { id: 3, name: "Catwoman", alignment: "good" }, {id: 4, name: "Riddler", alignment: "bad" }];

  const result = heroes.filter(hero => hero.alignment === alignmentFilter);

  return (
    <>
      <h1>React</h1>
      <select name="alignment" id="alignment" defaultValue={alignmentFilter} onChange={event => {
        setAlignmentFilter(event.target.value);
      }}>
        <option value="good">Good</option>
        <option value="bad">Bad</option>
      </select>
      <ul>
        {result.map(hero => <li key={hero.id}>{hero.name}</li>)}
      </ul>
      <LearnUseState />
      <LearnUseEffect />
      <HeroesList />
    </>
  )
}

export default App;
