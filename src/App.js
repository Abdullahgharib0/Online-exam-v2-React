import { Routes, Route , Link } from "react-router-dom";



function App() {
  return (
      <div className="App">

      <Routes>
        <Route path="/" element="<Home />" />
        <Route path="/desc" element="<Desc />" />
        <Route path="/login" element="<Login />" />
        <Route path="/login" element="<Login />" />
      </Routes>
      </div>
  );
}

export default App;
