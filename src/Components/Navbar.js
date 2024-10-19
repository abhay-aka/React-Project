import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex justify-between b">
        <div className="">React Mini Project</div>
        <div>
            <ul>
                <li><Link to={"/todo"}>Todo List</Link></li>
                <li><Link to={"/calc"}>Calculator</Link></li>
                <li><Link to={"/gallery"}>Gallery</Link></li>
                <li><Link to={"/comments"}>CommentSection</Link></li>
                
            </ul>
        </div>
    </div>
  );
};
export default Navbar;