import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import SearchPhotos from "./Components/Search"



function App() {


  return (
    <>
    <div className="app shadow">

    <SearchPhotos/>

    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home category="all"/>} />
       
        <Route path="/car" element={<Home category="car"/>} />
        <Route path="/food" element={<Home category="food"/>} />
        <Route path="/flower" element={<Home category="flower"/>} />
        <Route path="/colors" element={<Home category="colors"/>} />
        <Route path="/arts" element={<Home category="arts"/>} />
        <Route path="/nature" element={<Home category="nature"/>} />
        <Route path="/road" element={<Home category="road"/>} />
        <Route path="/park" element={<Home category="park"/>} />
     
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
