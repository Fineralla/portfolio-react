import './styles/main.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';
import Footer from './components/Footer/Footer';
import ScrollToTop from './utils/scrollToTop';
import Demo from './pages/Demo';

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/project-page/:id' element={<ProjectPage />} />
					<Route path='/project-page/:id/demo' element={<Demo />} />
					<Route path='/contacts' element={<Contacts />} />
				</Routes>
				<Footer />
			</Router>
			{/* <div>
				<a href='/guess-the-number/index.html'>Перейти к HTML-странице</a>
			</div> */}
		</div>
	);
}

export default App;
