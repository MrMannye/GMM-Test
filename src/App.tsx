import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router'; // Usa 'react-router-dom' en lugar de 'react-router'
import { Routes, Route, Outlet } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Ruta principal con el Header */}
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path='/dashboard' element={<Dashboard />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

// Define un layout que incluye el Header y el Outlet
function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;
