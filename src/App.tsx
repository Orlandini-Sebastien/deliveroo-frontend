import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

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
			<div className="div-logo-layout">
				<div className="div-logo">
					<img className="logo" src="/Deliveroo-Logo.png" alt="logo" />
				</div>
			</div>

			<div className="layout">
				<header>
					<div className="header-block">
						<div>
							<div className="header-title">{data.restaurant.name}</div>
							<div className="header-description">
								{data.restaurant.description}
							</div>
						</div>
						<img
							className="img-header"
							src={data.restaurant.picture}
							alt="picture"
						/>
					</div>
				</header>
			</div>

			<section className="list">
				<aside className="aside-left">
					<main>
						{data.categories.slice(0, 6).map((elem: any, index: any) => {
							return (
								<div className="totalite" key={index}>
									<div className="chaquetitre">{elem.name}</div>

									<div className="element2par2">
										{elem.meals.map((elem2: any, index: any) => {
											return (
												<div key={index} className="element">
													<div className="blocktext">
														<h2>{elem2.title} </h2>
														<h3>{elem2.description}</h3>
														<h4>{elem2.price}€</h4>
														<h5>{elem2.popular}</h5>
													</div>
													<div className="image">
														{elem2.picture && (
															<img className="theimage" src={elem2.picture} />
														)}
													</div>
												</div>
											);
										})}
									</div>
								</div>
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
