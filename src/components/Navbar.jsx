import { Link } from "react-router-dom";

let Navbar = () => {
  return (
   <>
   <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-green-500"><Link to="/"> eStore </Link></a>
      </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a>Theme</a></li>
    </ul>
  </div>
</div>
   </>
  );
}

export default Navbar
