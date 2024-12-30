import Navbar from "./Navbar";

const Header = ({ cart }) => {
	return (
		<header className="content-padding">
			<h1>SHOPPING CART</h1>
			<Navbar cart={cart} />
		</header>
	);
};

export default Header;
