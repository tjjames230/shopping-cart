import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import { useState } from "react";

function App() {
	const [cart, setCart] = useState(0);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home cart={cart} />} />
					<Route path="shop" element={<Shop cart={cart} />} />
					<Route path="checkout" element={<Checkout cart={cart} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
