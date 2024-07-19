import project01 from './../img/projects/01.jpg';
import project01Big from './../img/projects/01-big.jpg';
import project02 from './../img/projects/02.jpg';
import project02Big from './../img/projects/02-big.jpg';
import project03 from './../img/projects/03.jpg';
import project03Big from './../img/projects/03-big.jpg';
import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg';

const projects = [
	{
		title: 'Game: Guess The Number',
		skills: 'Vanilla JS, HTML, CSS',
		img: project01,
		imgBig: project01Big,
		gitHubLink:
			'https://github.com/Fineralla/Portfolio/tree/main/pages/guess-the-number',
		liveDemoLink: 'https://fineralla.github.io/guess-the-number-game/'
	},
	{
		title: 'Login | Registration Form',
		skills: 'HTML, CSS, animation',
		img: project02,
		imgBig: project02Big,
		gitHubLink:
			'https://github.com/Fineralla/Portfolio/tree/main/pages/login-form',
		liveDemoLink:
			'https://fineralla.github.io/Portfolio/pages/login-form/index.html'
	},
	{
		title: 'Mortgage Calculator',
		skills: 'HTML, CSS, PHP, JS',
		img: project03,
		imgBig: project03Big,
		gitHubLink:
			'https://github.com/Fineralla/Portfolio/tree/main/pages/site-calc',
		liveDemoLink:
			'https://fineralla.github.io/Portfolio/pages/site-calc/index.html'
	},
	{
		title: 'Game: Pig',
		skills: 'JS, HTML, CSS',
		img: project04,
		imgBig: project04Big,
		gitHubLink:
			'https://github.com/Fineralla/Portfolio/tree/main/pages/pig-game',
		liveDemoLink:
			'https://fineralla.github.io/Portfolio/pages/pig-game/index.html'
	}
	// {
	// 	title: 'Landing Hydra',
	// 	skills: 'HTML, CSS, animation',
	// 	img: project05,
	// 	imgBig: project05Big,
	// 	gitHubLink: 'https://github.com/Fineralla/landing-page-Hydra',
	// 	liveDemoLink: ''
	// },
];
// добавить к каждому проекту ключ, который будет уникальным

export { projects };
