import styles from "../styles/components/_products.module.scss";
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
			<div>
				<img src="" alt="image" />
			</div>
			<h3>Product Title</h3>
			<div>
				<p>PRICE</p>
				<div>
					<input
						type="number"
						name=""
						id=""
						placeholder="0"
						min="0"
						ref={inputRef}
					/>
					<p onClick={handleStepUp}>+</p>
					<p onClick={handleStepDown}>-</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
