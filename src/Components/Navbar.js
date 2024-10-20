import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-red-100 p-4">
      <div className="text-lg font-bold"><Link to={"/"}>React Mini Projects</Link></div>
      <div className="flex justify-end">
        <ul className="flex space-x-4">
          <li><Link to={"/todo"}>Todo List</Link></li>
          <li><Link to={"/calc"}>Calculator</Link></li>
          <li><Link to={"/gallery"}>Gallery</Link></li>
          <li><Link to={"/comments"}>Comment Section</Link></li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
