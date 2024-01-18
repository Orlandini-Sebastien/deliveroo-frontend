import { ReactElement } from "react";

type TitleProps = {
	name: any;
	description: any;
	picture: any;
};

const Title = ({ name, description, picture }: TitleProps): ReactElement => {
	return (
		<div className="bg-white">
			<div className="flex m-auto lg:w-2/3 max-lg:flex-col-reverse ">
					<div className="max-lg:m-8">
						<div className="my-4 text-3xl font-bold ">{name}</div>
						<div className="leading-8 text-xl text-gray-400">{description}</div>
					</div>
					<img className="lg:w-1/3 max-lg:h-72 object-cover rounded-xl lg:-mr-6 max-lg:mx-8 lg:ml-8 my-8" src={picture} alt="picture" />
			</div>
		</div>
	);
};

export default Title;
