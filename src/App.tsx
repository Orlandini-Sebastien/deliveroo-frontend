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
				const response = await axios.get(
					"https://site--backend-vinted--cfvhczrj5zks.code.run/deliveroo"
				);
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
			<section className="flex flex-row w-2/3 m-auto ">
				<aside className="w-2/3">
						{data.categories.slice(0, 6).map((elem: any, index: number) => {
							return (
								<Theme index={index} name={elem.name} meals={elem.meals} />
							);
						})}
				</aside>
				<aside className="w-1/3">
					<div className="flex justify-center flex-col bg-white m-7 sticky top-6 rounded-2xl shadow">
						<button className="border-none m-3 rounded-lg text-gray-400 h-12 text-lg bg-slate-200 ibm">
							Valider mon panier
						</button>
						<div className="flex h-72 text-gray-400 justify-center text-lg items-center">
							Votre panier est vide
						</div>
					</div>
				</aside>
			</section>
		</body>
	);
}

export default App;
