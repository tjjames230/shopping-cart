import Header from "./Header";

const Checkout = ({ cart }) => {
	return (
		<>
			<Header cart={cart} />
			<div>
				<h2>this is the checkout page</h2>
			</div>
		</>
	);
};

export default Checkout;
