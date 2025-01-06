import styles from "../styles/components/_products.module.scss";
import buttons from "../styles/components/_button.module.scss";

import { useRef } from "react";

const ProductCard = ({ cart, setCart, product }) => {
	const inputRef = useRef(null);

	const handleStepUp = () => {
		if (inputRef.current) {
			inputRef.current.stepUp();
		}
	};

	const handleStepDown = () => {
		if (inputRef.current) {
			inputRef.current.stepDown();
		}
	};

	const handleAddToCart = () => {
		const quantity = Number(inputRef.current.value);
		setCart(() => {
			let tempCart = Number(cart);
			return tempCart + quantity;
		});
		inputRef.current.value = 0;
	};

	return (
		<div className={styles["product-card"]}>
			<picture className={styles["img-ctn"]}>
				<img src={product.image} alt="image" />
			</picture>
			<h3 className={styles["product-title"]}>{product.title}</h3>
			<div className={styles["price-quantity"]}>
				<p>${product.price}</p>
				<div className={styles["quantity-ctn"]}>
					<input
						type="number"
						name=""
						id=""
						placeholder="0"
						min="0"
						ref={inputRef}
					/>
					<button className={buttons.up} onClick={handleStepUp}>
						+
					</button>
					<button className={buttons.down} onClick={handleStepDown}>
						-
					</button>
				</div>
			</div>
			<button onClick={handleAddToCart}>ADD TO CART</button>
		</div>
	);
};

export default ProductCard;
