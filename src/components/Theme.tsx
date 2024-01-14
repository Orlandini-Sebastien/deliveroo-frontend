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
		<div className="totalite" key={index}>
			<div className="chaquetitre">{name}</div>

			<div className="element2par2">
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
