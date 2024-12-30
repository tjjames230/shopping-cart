import Header from "./Header";
import ProductCard from "./ProductCard";
import styles from "../styles/components/_products.module.scss";

const Shop = ({ cart }) => {
	const productAmt = [1, 2, 3, 4, 5];
	const products = productAmt.map((index) => {
		return <ProductCard key={index} />;
	});

	return (
		<>
			<Header cart={cart} />
			<div className="content-padding page-flex">
				<h2>this is the shop page</h2>
				<div className={styles["products-ctn"]}>{products}</div>
			</div>
		</>
	);
};

export default Shop;
