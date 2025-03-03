import { useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const imageData = [
	{
		id: "autos-movil",
		image: "/imagen1.jpg", // Replace with the actual image URL
		title: "AUTOS",
		overlayText:
			"Los daños o pérdida del automóvil y los daños o perjuicios causados a la propiedad ajena o a terceras personas con motivo del uso del automóvil."
	},
	{
		id: "gmm-movil",
		image: "/imagen2.jpg", // Replace with the actual image URL
		title: "GASTOS MÉDICOS MAYORES",
		overlayText:
			"Los honorarios médicos, hospitalarios y demás que sean necesarios para la recuperación de la salud o vigor vital del asegurado, cuando se hayan afectado por causa de un accidente o enfermedad."
	},
	{
		id: "hogar-movil",
		image: "/imagen3.jpg", // Replace with the actual image URL
		title: "HOGAR",
		overlayText:
			"A la vivienda y a sus habitantes contra daños que pudieran sufrir a causa de fenómenos naturales o robo, daños que pueda ocasionar una mascota, entre otras cosas."
	},
	{
		id: "vida-movil",
		image: "/imagen4.jpg", // Replace with the actual image URL
		title: "VIDA",
		overlayText:
			"Es un respaldo económico el cuál su función principal es indemnizar a los beneficiarios designados con una suma de dinero en caso del fallecimiento de la persona asegurada."
	}
];

const Home = () => {
	const [activeId, setActiveId] = useState(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleCardClick = (id: any) => {
		setActiveId(activeId === id ? null : id);
	};

	return (
		<div className="grid grid-cols-1 gap-4 !p-4 sm:grid-cols-2">
			{imageData.map((item) => (
				<Card
					key={item.id}
					className="relative overflow-hidden shadow-lg cursor-pointer"
					onClick={() => handleCardClick(item.id)}
				>
					<img
						src={item.image}
						alt={item.title}
						className="w-full h-full object-cover"
					/>
					{activeId === item.id && (
						<motion.div
							className="absolute uppercase inset-0 flex flex-col gap-2 items-center justify-center bg-white/50 backdrop-blur-sm text-white !p-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<h2>Protege: </h2>
							<p className="text-center text-sm">{item.overlayText}</p>
						</motion.div>
					)}
					{activeId !== item.id && (
						<div className="absolute inset-0 text-center content-center z-10 text-white text-4xl font-bold drop-shadow">
							{item.title}
						</div>
					)}
				</Card>
			))}
		</div>
	);
};

export default Home;
