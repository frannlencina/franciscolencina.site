import React from 'react'

function Card(props) {
	return (
		
			<article className="flex flex-col sm:flex-row bg-white dark:text-white dark:bg-[var(--blue-dark)] rounded-lg">
				<aside className="Image flex justify-center items-center w-1/2 m-4">
					<a href={props.website} target="__blank">
						<img className="rounded-md hover:opacity-60" src={props.image} alt="Projects Preview Image" />
					</a>
				</aside>
				<main id="Body" className="m-4 flex flex-col gap-y-4 sm:gap-y-0 justify-around">
					<div className="flex items-center">
						<a href={props.website} className="flex gap-1 text-start md:text-2xl font-black opacity-80 hover:border-b-4 border-gray-400 dark:text-white dark:opacity-100" target="__blank">
							{props.title}
							<i class="ri-external-link-line"></i>
						</a>
					</div>
					<div>
						<p className="text-start max-w-md break-normal md:text-lg font-mono dark:text-white dark:opacity-80">
							{props.description}
						</p>
					</div>
					<footer className="footer w-full flex flex-col sm:flex-row sm:gap-0 gap-4">
						<div id="imagenes" className="flex gap-3 w-full items-center">

							{props.tech.map((url, id) => <img key={id} className='tech hover:scale-105 duration-300 h-8' src={url} alt="Tecnologia utilizada." />)}

						</div>
						<div
							className="flex text-center justify-center font-medium bg-[var(--blue)] text-white dark:bg-[var(--blue-deep)] dark:hover:bg-[var(--blue)] rounded-md hover:bg-gray-800 cursor-pointer">
							<a className="flex py-2 px-6" href={`/projects/` + props.slug} >Detalles<i className="ri-arrow-right-line ml-1"></i></a>
						</div>
					</footer>
				</main>
			</article>

	)
}

export default Card