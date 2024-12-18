import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<h2>SHOPPING CART</h2>
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
		</header>
	);
};

export default Header;
