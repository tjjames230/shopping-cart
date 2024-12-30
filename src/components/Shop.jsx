import Header from "./Header";

const Shop = ({ cart }) => {
	return (
		<>
			<Header cart={cart} />
			<div>
				<h2>this is the shop page</h2>
			</div>
		</>
	);
};

export default Shop;
