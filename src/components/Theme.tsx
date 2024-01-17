import { ReactElement } from "react";

type ThemeProps = {
	indexTheme: number;
	name: any;
	meals: any;
};

const Theme = ({ name, meals, indexTheme }: ThemeProps): ReactElement => {

	return (
		<div key={indexTheme}>
			<div className="my-5 font-medium text-2xl leading-5 text-gray-600">
				{name}
			</div>

			<div className="flex flex-wrap  justify-between">
				{meals.map((elem2: any, index: number) => {
					return (
						<div
							
							key={index + elem2.title}
							className="flex bg-white my-5 rounded-2xl  h-40  lg:w-11/12 xl:w-5/12 max-lg:w-full"
						>
							<div onClick={()=> {console.log(elem2.title)}} className="flex-col p-2 w-2/3">
								<div className="text-lg text-gray-600 overflow-x-hidden overflow-y-hidden h-1/4 py-2">
									{elem2.title}
								</div>
								<div className="w-4/5 h-1/2 py-6 overflow-x-hidden overflow-y-hidden  ">
									{elem2.description}
								</div>
								<div className="text-sm text-gray-500 ">{elem2.price}€</div>
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
};

export default Theme;
