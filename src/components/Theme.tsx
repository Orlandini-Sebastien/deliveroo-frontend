import { ReactElement } from "react";
import Article from "./Article";

type ThemeProps = {
	index: number;
    name : any;
    meals : any;
};

const Theme = ({
    name,
    meals,
	index,
}: ThemeProps): ReactElement => {
	return (
		<div key={index}>
			<div className="my-5 font-medium text-2xl leading-5 text-gray-600">{name}</div>

			<div className="flex flex-wrap flex-shrink-0 justify-between">
				{meals.map((elem2: any, index: number) => {
					return (
						<Article
							popular={elem2.popular}
							index={index}
							title={elem2.title}
							description={elem2.description}
							price={elem2.price}
							picture={elem2.picture}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Theme;
