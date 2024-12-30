import Header from "./Header";
import ProductCard from "./ProductCard";

const Shop = ({ cart }) => {
	const productAmt = [1, 2, 3];
	const products = productAmt.map((product, index) => {
		return <ProductCard product={product} key={index} />;
	});

	return (
		<>
			<Header cart={cart} />
			<div>
				<h2>this is the shop page</h2>
				{products}
			</div>
		</>
	);
};

export default Shop;
