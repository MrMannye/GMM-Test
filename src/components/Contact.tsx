/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		mensaje: "",
		codigoPostal: "",
		estado: "",
		municipio: "",
		colonia: "",
	});

	const [colonias, setColonias] = useState([]); // Para almacenar las colonias recuperadas
	const [error, setError] = useState("");

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Validar el largo del código postal y realizar consulta
		if (name === "codigoPostal" && value.length === 5) {
			fetch(`https://web.aarco.com.mx/api-examen/api/examen/sepomex/${value}`)
				.then((response) => {
					if (!response.ok) throw new Error("Código postal no válido.");
					return response.json();
				})
				.then((data) => {
					const catalogo = JSON.parse(data.CatalogoJsonString);
					if (catalogo && catalogo.length > 0) {
						const municipioData = catalogo[0].Municipio;
						const ubicaciones = catalogo[0].Ubicacion;

						setFormData((prev) => ({
							...prev,
							estado: municipioData.Estado.sEstado,
							municipio: municipioData.sMunicipio,
							colonia: ubicaciones[0]?.sUbicacion || "",
						}));
						setColonias(ubicaciones.map((ubicacion: any) => ubicacion.sUbicacion));
					} else {
						throw new Error("Sin datos para el código postal.");
					}
				})
				.catch((err) => {
					setError(err.message);
					setColonias([]);
					setFormData((prev) => ({
						...prev,
						estado: "",
						municipio: "",
						colonia: "",
					}));
				});
		}
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setError(""); // Limpiar errores anteriores

		const { name, email, mensaje } = formData;
		if (!name || !email || !mensaje) {
			setError("Por favor, llena todos los campos obligatorios.");
			return;
		}

		// Aquí iría la lógica para manejar el envío del formulario.
		console.log("Formulario enviado con éxito:", formData);
	};

	return (
		<div className="flex flex-col items-start md:items-center justify-center gap-2 !p-5 text-[#979797]">
			<h3 className="text-2xl font-medium">
				Llena el siguiente formulario y uno de
				nuestros asesores se pondrá en contacto contigo.
			</h3>
			<form className="sm:w-full md:w-lg md:grid md:grid-cols-2 md:gap-4" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="name" className="text-2xl">
						Nombre:
					</label>
					<input
						type="text"
						name="name"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="email" className="text-2xl">
						E-mail:
					</label>
					<input
						type="email"
						name="email"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="mensaje" className="text-2xl">
						Mensaje:
					</label>
					<textarea
						name="mensaje"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.mensaje}
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="codigoPostal" className="text-2xl">
						Código Postal:
					</label>
					<input
						type="text"
						name="codigoPostal"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.codigoPostal}
						onChange={handleChange}
						maxLength={5}
						pattern="\d*"
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="estado" className="text-2xl">
						Estado:
					</label>
					<input
						type="text"
						name="estado"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.estado}
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="municipio" className="text-2xl">
						Municipio:
					</label>
					<input
						type="text"
						name="municipio"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.municipio}
						readOnly
					/>
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="colonia" className="text-2xl">
						Colonia:
					</label>
					<select
						name="colonia"
						className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]"
						value={formData.colonia}
						onChange={handleChange}
					>
						{colonias.map((colonia, index) => (
							<option key={index} value={colonia}>
								{colonia}
							</option>
						))}
					</select>
				</div>
				{error && <p className="text-red-500">{error}</p>}
				<button
					className="!p-2 text-3xl bg-[#3B01B8] text-white !my-2 w-full"
					type="submit"
				>
					ENVIAR
				</button>
			</form>
		</div>
	);
}

export default Contact;
