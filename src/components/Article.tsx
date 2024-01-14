import { ReactElement } from "react";

type ArticleProps = {
	title: any;
	description: any;
	price: any;
	popular: any;
	picture?: any;
	index: number;
};

const Article = ({
	title,
	description,
	price,
	popular,
	picture,
	index,
}: ArticleProps): ReactElement => {
	return (
		<div key={index} className="flex bg-white my-5 rounded-2xl element">
			<div className="flex-col w-2/3 p-2">
				<div className="text-lg text-gray-600 overflow-x-hidden overflow-y-hidden h-1/4 py-2">
					{title}{" "}
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

export default Article;
