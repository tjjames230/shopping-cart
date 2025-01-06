import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import { useState, useEffect } from "react";

function App() {
	const [cart, setCart] = useState(0);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function test() {
			try {
				const data = await fetch("https://fakestoreapi.com/products");
				const tempProducts = await data.json();
				setProducts(tempProducts);
			} catch (error) {
				console.log("Error:", error);
			}
		}

		test();
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home cart={cart} />} />
					<Route
						path="shop"
						element={<Shop cart={cart} setCart={setCart} products={products} />}
					/>
					<Route path="checkout" element={<Checkout cart={cart} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
