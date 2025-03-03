import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink } from "react-router";


const navItems = [
	{
		key: 'home',
		name: 'Inicio',
		link: '/'
	},
	{
		key: 'Servicios',
		name: 'Quienes somos?',
		link: '/about'
	},
	{
		key: 'Contacto',
		name: 'Contactanos',
		link: '/contact'
	}
];

function Header() {

	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	const DrawerList = (
		<div className='w-[250px] header h-full' role="presentation" onClick={toggleDrawer(false)}>
			<List>
				{navItems.map((navItem) => (
					<ListItem key={navItem.key}>
						<NavLink to={navItem.link} style={({ isActive }) => ({
							backgroundColor: isActive ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
						})} className={'w-full flex items-center !py-1 rounded-md'}>
							<ListItemIcon>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1}>
									<path d="M20 12l-10 0"></path>
									<path d="M20 12l-4 4"></path>
									<path d="M20 12l-4 -4"></path>
									<path d="M4 4l0 16"></path>
								</svg>
							</ListItemIcon>
							<ListItemText primary={navItem.name} />
						</NavLink>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<div className="header">
			<button className='md:hidden' onClick={toggleDrawer(true)}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1}>
					<path d="M4 6l16 0"></path>
					<path d="M4 12l16 0"></path>
					<path d="M4 18l16 0"></path>
				</svg>
			</button>
			<ul className='hidden md:flex gap-6'>
				{navItems.map((navItem) => (
					<li key={navItem.key}>
						<NavLink to={navItem.link} className='text-white text-xl hover:opacity-70'>{navItem.name}</NavLink>
					</li>
				))}
			</ul>
			<Drawer open={open} onClose={toggleDrawer(false)} >
				{DrawerList}
			</Drawer>
		</div>
	)
}

export default Header