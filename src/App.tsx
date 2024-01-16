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
			<section
				className="flex m-auto
			md:flex-row md:w-2/3
			max-md:flex-col max-md:mx-8  "
			>
				<aside className="max-md:mb-20 md:w-2/3 w-full">
					{data.categories.slice(0, 6).map((elem: any, index: number) => {
						return <Theme index={index} name={elem.name} meals={elem.meals} />;
					})}
				</aside>
				<aside className="max-md:hidden md:block md:w-1/3">
					<div
						className="flex  flex-col bg-white  rounded-2xl shadow-xl
					md:sticky md:top-2 md:m-7 md:justify-center  md:w-full
					max-md:fixed max-md:bottom-0 max-md:w-full"
					>
						<button className="border-none m-3 rounded-lg text-gray-400 h-12 text-lg bg-slate-200 ibm">
							Valider mon panier
						</button>
						<div className="flex md:h-72 text-gray-400 justify-center text-lg items-center">
							Votre panier est vide
						</div>
					</div>
				</aside>
				<aside className="max-md:block md:hidden ">
					<div
						className="flex  flex-col bg-white  rounded-2xl shadow-xl
						max-md:fixed max-md:bottom-0 max-md:w-11/12 -mx-1"
					>
						<button className="border-none m-3 rounded-lg text-gray-400 h-12 text-lg bg-slate-200 ibm">
							Voir le panier
						</button>
					</div>
				</aside>
			</section>
		</body>
	);
}

export default App;
