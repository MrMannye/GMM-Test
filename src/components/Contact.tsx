
function Contact() {
	return (
		<div className="flex flex-col items-start md:items-center justify-center gap-2 !p-5 text-[#979797]">
			<h3 className="text-2xl font-medium">
				Llena el siguente formulario y uno de
				nuestros asesores se pondrá en contacto contigo.
			</h3>
			<form className="sm:w-full md:w-md" action="">
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="name" className="text-2xl">Nombre:</label>
					<input type="text" name="name" className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]" />
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="email" className="text-2xl">E-mail:</label>
					<input type="text" name="email" className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]" />
				</div>
				<div className="flex flex-col gap-1 !my-2">
					<label htmlFor="mensaje" className="text-2xl">Nombre:</label>
					<input type="text" name="mensaje" className="border-2 !p-2 rounded-md shadow-2xl border-[#3B01B8]" />
				</div>
				<button className="!p-2 text-3xl bg-[#3B01B8] text-white !my-2 w-full" type="submit">ENVIAR</button>
			</form>
		</div>
	)
}

export default Contact