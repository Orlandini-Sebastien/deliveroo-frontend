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
		<div key={index} className="element">
			<div className="blocktext">
				<h2>{title} </h2>
				<h3>{description}</h3>
				<h4>{price}€</h4>
				<h5>{popular}</h5>
			</div>
			<div className="image">
				{picture && <img className="theimage" src={picture} />}
			</div>
		</div>
	);
};

export default Article;
