import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<div className="d-flex justify-content-between align-items-center mt-3">
		<h1 className="display-4">Admin Panel</h1>

		<div>
			<Link to="/shelter" className="btn btn-outline-primary">Приюты</Link>
		</div>
	</div>
);

export default Navbar;
