import { ReactElement } from "react";

type TitleProps = {
	name: any;
	description: any;
	picture: any;
};

const Title = ({ name, description, picture }: TitleProps): ReactElement => {
	return (
		<div className="bg-white">
			<div className="flex m-auto w-2/3 ">
				<div>
					<div className="my-4 text-3xl font-bold ">{name}</div>
					<div className="leading-8 text-xl text-gray-400">{description}</div>
				</div>
				<img className="w-1/3 rounded-xl m-8" src={picture} alt="picture" />
			</div>
		</div>
	);
};

export default Title;
