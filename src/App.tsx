import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Title from "./components/Title";
import Theme from "./components/Theme";

function App() {
	const [data, setData] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3200");
				setData(response.data);
			} catch (error) {
				console.log("catch app>>>", error);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);

	return isLoading ? (
		<p>Chargement en cours ...</p>
	) : (
		<body>
			<Header />
			<Title
				name={data.restaurant.name}
				description={data.restaurant.description}
				picture={data.restaurant.picture}
			/>
			<section className="list">
				<aside className="aside-left">
					<main>
						{data.categories.slice(0, 6).map((elem: any, index: number) => {
							return (
								<Theme index={index} name={elem.name} meals={elem.meals} />
							);
						})}
					</main>
				</aside>
				<aside className="aside-right">
					<div className="panier">
						<button className="button-panier">Valider mon panier</button>
						<div className="w-panier">Votre panier est vide</div>
					</div>
				</aside>
			</section>
		</body>
	);
}

export default App;
