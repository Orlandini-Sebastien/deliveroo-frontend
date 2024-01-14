import { ReactElement } from "react";

type TitleProps = {
	name: any;
	description: any;
	picture: any;
};

const Title = ({ name, description, picture }: TitleProps): ReactElement => {
	return (
		<div className="layout">
			<header>
				<div className="header-block">
					<div>
						<div className="header-title">{name}</div>
						<div className="header-description">{description}</div>
					</div>
					<img className="img-header" src={picture} alt="picture" />
				</div>
			</header>
		</div>
	);
};

export default Title;
