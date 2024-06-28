function Contacts() {
	return (
		<main className='section'>
			<div className='container'>
				<h1 className='title-1'>Contacts</h1>

				<ul className='content-list'>
					<li className='content-list__item'>
						<h2 className='title-2'>Location</h2>
						<p>Nizhny Novgorod, Russia</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Telegram</h2>
						<p>
							<a href='https://t.me/finkanoob' rel='noreferrer' target='_blank'>
								t.me/finkanoob
							</a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>Email</h2>
						<p>
							<a
								href='mailto:artistclay39@gmail.com'
								rel='noreferrer'
								target='_blank'
							>
								artistclay39@gmail.com
							</a>
						</p>
					</li>
					<li className='content-list__item'>
						<h2 className='title-2'>VK</h2>
						<p>
							<a
								href='https://vk.com/fineralla'
								rel='noreferrer'
								target='_blank'
							>
								vk.com/fineralla
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;
