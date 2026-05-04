import Header from '../components/Header/Header';

function Home() {
	return (
		<>
			<Header />

			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2'>My tools</h2>
							<p>
								Figma, Adobe Photoshop, Adobe Illustrator, Tilda
							</p>
							{/* <p>
								JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
								BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
							</p> */}
						</li>
						{/* <li className='content-list__item'>
							<h2 className='title-2'>Backend</h2>
							<p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
						</li> */}
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;
