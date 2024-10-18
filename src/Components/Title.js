import { Link } from "react-router-dom";

const Title = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1 id="app-title" key="app-title">
                    Prepare React.
                </h1>
                <ul>
                    <li style={{ listStyleType: "none", padding: 0 }}><Link to="/contacts">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Title;
