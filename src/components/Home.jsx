import Header from "./Header";

const Home = ({ cart }) => {
	return (
		<div>
			<Header cart={cart} />
			<h2>this is the home page</h2>
		</div>
	);
};

export default Home;
