import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
	return (
		<nav>
			<ul>
				<li>
					<Link className="link" to="/">
						HOME
					</Link>
				</li>
				<li>
					<Link className="link" to="/shop">
						SHOP
					</Link>
				</li>
				<li>
					<Link className="link" to="/checkout">
						CHECKOUT ({cart})
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
