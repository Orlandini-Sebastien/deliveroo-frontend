import { ReactElement } from "react";


type MealProps = {
	title: any;
	description: any;
	price: any;
	popular: any;
	picture?: any;
	indexArticle: number;
	addArticle:any;

};

const Meal = ({
	title,
	description,
	price,
	popular,
	picture,
	indexArticle,
	addArticle

	
}: MealProps): ReactElement => {

	return (
		<div onClick={addArticle} key={indexArticle+title} className="flex bg-white my-5 rounded-2xl  h-40  lg:w-11/12 xl:w-5/12 max-lg:w-full">
			<div className="flex-col p-2 w-2/3">
				<div className="text-lg text-gray-600 overflow-x-hidden overflow-y-hidden h-1/4 py-2">
					{title}
				</div>
				<div className="w-4/5 h-1/2 py-6 overflow-x-hidden overflow-y-hidden  ">
					{description}
				</div>
				<div className="text-sm text-gray-500 ">{price}€</div>
				<div>{popular}</div>
			</div>
			<div className="flex items-center">
				{picture && (
					<img
						className="flex p-4 object-cover w-32 h-32 rounded-3xl"
						src={picture}
					/>
				)}
			</div>
		</div>
	);
};

export default Meal;
