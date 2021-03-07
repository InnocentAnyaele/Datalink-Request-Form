import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './Landing.css';
// import AdminLogin from './AdminLogin';
// import FinancialDepartmentLogin from './FinancialDepartmentLogin';
// import HeadOfDepartmentLogin from './HeadOfDepartmentLogin';
// import LibraryLogin from './LibraryLogin';
// import RegistrarLogin from './RegistrarLogin';
import UserLogin from './UserLogin';

function Navigation() {
	return (
		<Navbar>
			<Navbar.Brand className='nav-name' href='#home'>
				DATALINK <span style={{ color: '#1360ef' }}>REQUEST FORMS</span>
			</Navbar.Brand>

			{/* <NavDropdown
				title='Login'
				className='ml-auto'
				drop='left'
				id='login-dropdown'>
				<NavDropdown.Item>
					<FinancialDepartmentLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<HeadOfDepartmentLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<LibraryLogin />
				</NavDropdown.Item>
				<NavDropdown.Item>
					<RegistrarLogin />
				</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item>
					<AdminLogin />
				</NavDropdown.Item>
			</NavDropdown> */}

			<div className='ml-auto'>
				<Button vairant='primary'>
					<UserLogin />
				</Button>
			</div>
		</Navbar>
	);
}

export default Navigation;
