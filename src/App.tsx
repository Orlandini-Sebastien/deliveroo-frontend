import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
	const [data, setData] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [add, setAdd] = useState<any>([]);
	const sousTotal = () => {
		let total = 0;
		for (let i = 0; i < add.length; i++) {
			total = total + Number(add[i][1]) * add[i][2];
		}
		return total.toFixed(2);
	};

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
		<section className="principal">
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
						return (
							<div key={index}>
								<div className="my-5 font-medium text-2xl leading-5 text-gray-600">
									{elem.name}
								</div>

								<div className="flex flex-wrap  justify-between">
									{elem.meals.map((elem2: any, index: number) => {
										return (
											<div
												onClick={() => {
													console.log(elem2.title);
													let ok: boolean = false;
													const newAdd = [...add];

													for (let i in newAdd) {
														console.log(newAdd[i]);
														if (newAdd[i][0] === elem2.title) {
															ok = true;
															newAdd[i][2]++;
														}
													}
													if (!ok) {
														newAdd.push([elem2.title, elem2.price, 1]);
													}
													sousTotal();
													setAdd(newAdd);
												}}
												key={index + elem2.title}
												className="flex bg-white my-5 rounded-2xl  h-40  lg:w-11/12 xl:w-5/12 max-lg:w-full"
											>
												<div className="flex-col p-2 w-2/3">
													<div className="text-lg text-gray-600 overflow-x-hidden overflow-y-hidden h-1/4 py-2">
														{elem2.title}
													</div>
													<div className="w-4/5 h-1/2 py-6 overflow-x-hidden overflow-y-hidden  ">
														{elem2.description}
													</div>
													<div className="text-sm text-gray-500 ">
														{elem2.price}€
													</div>
													<div>{elem2.popular}</div>
												</div>
												<div className="flex items-center">
													{elem2.picture && (
														<img
															className="flex p-4 object-cover w-32 h-32 rounded-3xl"
															src={elem2.picture}
														/>
													)}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						);
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
						<div className="flex flex-col  md:h-72 text-gray-400 justify-center text-lg items-center">
							{add.length === 0 ? (
								"Votre panier est vide"
							) : (
								<div>
									{add.map((elem: any, index: any) => {
										return (
											<div>
												<button
													onClick={() => {
														let ok: boolean = false;
														const newAdd = [...add];
														for (let i in newAdd) {
															if (newAdd[i][0] === elem[0]) {
																newAdd[i][2]++;
															}
														}
														sousTotal();
														setAdd(newAdd);
													}}
													className="border"
												>
													+
												</button>
												{elem[2]}
												{elem[0]}
												<button
													onClick={() => {
														let newAdd = [...add];

														for (let i in newAdd) {
															if (newAdd[i][0] === elem[0]) {
																newAdd[i][2]--;
															}
														}
														newAdd = newAdd.filter((a) => a[2] !== 0);
														sousTotal();
														setAdd(newAdd);
													}}
													className="border"
												>
													-
												</button>
											</div>
										);
									})}

								<div>
								Sous-total <span>{sousTotal()}</span>
							</div>
							<div>
								Frai de livraison <span>2.5</span>
							</div>
							<div>
								Total <span>{Number(sousTotal()) + 2.5}</span>
							</div>	
								</div>
							)}
							
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
		</section>
	);
}

export default App;
