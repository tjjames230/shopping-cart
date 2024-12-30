import styles from "../styles/components/_products.module.scss";
import buttons from "../styles/components/_button.module.scss";

import { useRef } from "react";

const ProductCard = () => {
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

	return (
		<div className={styles["product-card"]}>
			<div className={styles["img-ctn"]}>
				<img src="" alt="image" />
			</div>
			<h3>Product Title</h3>
			<div className={styles["price-quantity"]}>
				<p>PRICE</p>
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
			<button>ADD TO CART</button>
		</div>
	);
};

export default ProductCard;
