import Header from "./Header";

const Home = ({ cart }) => {
	return (
		<div>
			<Header cart={cart} />
			<div className="content-padding">
				<h2>this is the home page</h2>
			</div>
		</div>
	);
};

export default Home;
