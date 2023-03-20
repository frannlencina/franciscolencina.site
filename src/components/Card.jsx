import React from 'react'

function Card(props) {
  return (
    <li className="link-card flex flex-col items-end w-full gap-2 mb-8 bg-white dark:bg-[var(--blue-dark)] rounded-lg dark:text-white">
	<div className="flex flex-col sm:flex-row">
		<div className="Image flex justify-center items-center w-1/2 m-4">
			<a href={props.website} target="__blank" className="cursor-pointer">
				<img className="rounded-md hover:opacity-60" src={props.image} alt="Projects Preview Image"/>
			</a>
		</div>
		<div id="Body" className="m-4 flex flex-col justify-around">
			<div className="flex items-center">
				<a href={props.website} className="text-start md:text-2xl font-black opacity-80 hover:border-b-4 border-gray-400 cursor-pointer dark:text-white dark:opacity-100" target="__blank">
					{props.title}
					<i className="ri-link relative top-1"></i>
				</a>
			</div>
			<div className="">
				<p className="text-start max-w-md break-all md:text-lg font-mono dark:text-white dark:opacity-80">
					{props.description}
				</p>
			</div>
			<div className="footer w-full flex">
				<div id="imagenes" className="flex gap-3 w-full items-center">
					<img
						class="tech hover:scale-105 duration-300 cursor-pointer h-8"
						src={props.tech1}
						alt="Tecnologia Nm1"
					/>
					<img
						class="tech hover:scale-105 duration-300 cursor-pointer h-8"
						src={props.tech2}
						alt="Tecnologia Nm2"
					/>
					<img
						class="tech hover:scale-105 duration-300 cursor-pointer h-8"
						src={props.tech3}
						alt="Tecnologia Nm3"
					/>
					<img
						class="tech hover:scale-105 duration-300 cursor-pointer h-8"
						src={props.tech4}
						alt="Tecnologia Nm3"
					/>
				</div>
				<div className="w-1/2">
					<div>
						<div
							className="flex text-center justify-center p-2 bg-[var(--blue)] dark:bg-[var(--blue-deep)] rounded-md text-white hover:text-blue-400 duration-300 cursor-pointer">
							<a className="flex" href={`/projects/`+props.slug} >Detalles<i className="ri-arrow-right-line"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</li>
  )
}

export default Card