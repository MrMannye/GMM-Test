import { Card, CardContent } from "@mui/material";
import { IconButton } from "@mui/material";
import { FolderOutlined, FileCopy, Visibility, Download, Share, SearchOutlined, SettingsOutlined } from "@mui/icons-material";
import { Facebook, Twitter, Instagram, LinkedIn, Google, YouTube } from "@mui/icons-material";
import Avatar from '@mui/material/Avatar';

const Dashboard = () => {
	const categories = [
		{ name: "Vida", count: 11 },
		{ name: "Gastos Médicos Mayores", count: 5 },
		{ name: "Autos", count: 10 },
		{ name: "Hogar", count: 12 },
		{ name: "Accidentes personales", count: 5 },
		{ name: "Asistencias AARCO", count: 12 },
		{ name: "AARCO GO", count: 5 }
	];

	const documents = [
		{
			title: "Asegurómetro líneas personales",
			description: "Aquí encontrarás el Ranking de Aseguradoras. Consúltalo.",
			date: "11/01/22",
			isNew: true
		},
		{
			title: "Tiempos de respuesta",
			description: "Tiempos de respuesta (Líneas Personales).",
			date: "22/08/21",
			isNew: false
		},
		{
			title: "Nuevo sitio personalizado",
			description: "Tiempos de respuesta (Líneas Personales).",
			date: "22/08/21",
			isNew: false
		}
	];

	return (
		<div className="p-8 bg-[#F3F3F5] h-screen w-screen flex flex-col gap-6">

			<header className="!p-4 bg-white flex items-center">
				<nav className="flex items-center justify-between w-full !mx-24">
					<section className="flex items-center gap-8">
						<h1 className="text-2xl font-semibold">SIA</h1>
						<ul className="flex gap-8">
							<li>Inicio</li>
							<li className="text-blue-500">Lineas</li>
							<li>Mercados</li>
							<li>Legal</li>
							<li>Cobranza</li>
						</ul>
					</section>
					<section className="flex items-center gap-6">
						<div className="bg-[#F3F3F5] !px-4 !py-1 rounded-lg flex items-center gap-2">
							<SearchOutlined className="text-gray-600" />
							<input type="text" />
						</div>
						<SettingsOutlined />
						<Avatar src='/imagen2.jpg' sx={{ width: 28, height: 28 }} />
					</section>
				</nav>
			</header>



			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mx-24 h-full">
				{/* Categorías */}
				<Card className="p-4 h-5/6">
					<CardContent>
						<h2 className="font-semibold !mb-4">Categorías</h2>
						<ul className="!space-y-6 !mt-2">
							{categories.map((category, index) => (
								<li
									key={index}
									className="flex items-center justify-between text-gray-700"
								>
									<div className="flex items-center gap-4 space-x-2 text-xs">
										<FolderOutlined className="text-gray-500" />
										<span>{category.name}</span>
									</div>
									<span className="text-blue-500 text-xs w-5 text-center h-5 items-center rounded-full bg-[#F5F5F5]">{category.count}</span>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* Documentos */}
				<Card className="col-span-2 p-4 h-4/7">
					<CardContent>
						<h2 className="text-xl font-semibold mb-4">Documentos</h2>
						<ul className="!space-y-7 !p-2">
							{documents.map((doc, index) => (
								<li
									key={index}
									className="flex items-center justify-between bg-white p-4"
								>
									<div className="flex items-center gap-4">
										<FileCopy className=" text-gray-500" />
										<div className="flex flex-col">
											<h3 className="text-sm font-semibold text-gray-800">{doc.title}</h3>
											<p className="text-xs">{doc.description}</p>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<span className="text-black bg-[#F3F3F5] text-xs !p-1 !px-3 rounded-md !mr-3">{doc.date}</span>
										<IconButton sx={{ background: 'rgb(0, 10, 255)', color: 'white', marginX: '2px' }} size="small">
											<Visibility />
										</IconButton>
										<IconButton sx={{ background: 'rgb(0, 10, 255)', color: 'white', marginX: '2px' }} size="small">
											<Download />
										</IconButton>
										<IconButton sx={{ background: 'rgb(0, 10, 255)', color: 'white', marginX: '2px' }} size="small">
											<Share />
										</IconButton>
									</div>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</div>

			{/* Footer */}
			<footer className="mt-12 text-gray-500 text-xs bg-[#2F3D48]">
				<div className="!mx-24 flex items-center justify-between">
					<div className="flex items-center justify-center gap-8 !p-4">
						<div className="flex items-center gap-4">
							<img src="Logo" alt="Logo AARCO" />
							<div>
								<p>Aviso de Privacidad Agente</p>
								<p>Aviso de Privacidad AARCO</p>
							</div>
						</div>
						<div className="text-white flex items-center gap-4 [&>*]:!w-5">
							<Facebook />
							<Twitter />
							<Instagram />
							<LinkedIn />
							<Google />
							<YouTube />
						</div>
					</div>
					<div className="flex flex-col text-xs items-start">
						<p>Mayoraazgo No. 37, Col. Xoco, Benito Juárez, CDMX, México, C.P. 03330</p>
						<p>aarcomunicacion@aarco.com.mx</p>
					</div>
				</div >
			</footer>
		</div>
	);
};

export default Dashboard;
