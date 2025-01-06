import Header from "./Header";
import ProductCard from "./ProductCard";
import styles from "../styles/components/_products.module.scss";

const Shop = ({ cart, setCart, products }) => {
	const productList = products.map((product, index) => {
		return (
			<ProductCard
				key={index}
				cart={cart}
				setCart={setCart}
				product={product}
			/>
		);
	});

	return (
		<>
			<Header cart={cart} />
			<div className="content-padding page-flex">
				<h2>this is the shop page</h2>
				<div className={styles["products-ctn"]}>{productList}</div>
			</div>
		</>
	);
};

export default Shop;
