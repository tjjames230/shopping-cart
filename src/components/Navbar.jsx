import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">HOME</Link>
				</li>
				<li>
					<Link to="/shop">SHOP</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
