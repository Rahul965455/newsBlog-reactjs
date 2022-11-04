import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Curser from "./Component/Curser";
import Details from "./Component/Details";
import Header from "./Component/Header";
import News from "./Component/News";

function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route exact path="/" element={<Curser/>}></Route>
  <Route exact path="/News" element={<News/>}></Route>
  <Route exact path="/News/:publishedAt" element={<Details/>}></Route>
</Routes>
    </div>
  );
}

export default App;
