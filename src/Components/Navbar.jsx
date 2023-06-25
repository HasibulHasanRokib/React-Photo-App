import { Link } from "react-router-dom"


const Navbar = () => {

  return (
    <>

    <div>
      <nav className="navbar">
        <ul className="nav-items">
            <li><Link className="nav-link " to="/">All</Link></li>
            <li><Link className="nav-link" to="/car">Car</Link></li>
            <li><Link className="nav-link" to="/food">Food</Link></li>
            <li><Link className="nav-link" to="/flower">Flower</Link></li>
            <li><Link className="nav-link" to="/colors">Colors</Link></li>
            <li><Link className="nav-link" to="/arts">Arts</Link></li>
            <li><Link className="nav-link" to="/nature">Nature</Link></li>
            <li><Link className="nav-link" to="/road">Road</Link></li>
            <li><Link className="nav-link" to="/park">Park</Link></li>
        </ul>
      </nav>
    </div>
    </>

  )
}

export default Navbar
