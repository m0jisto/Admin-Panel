import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import { ContextApp } from '../App';

const ShelterTr = ({ id, title, adress, website, phoneNumber, email, specialization }) => {
	const { dispatch } = useContext(ContextApp);

	const onDelete = () => {
		if (window.confirm('Вы действительно хотите удалить данный элемент?')) {
			axios.delete(`https://backend-admin-panel.herokuapp.com/shelters/${id}`)
				.then(() => {
					axios.get('https://backend-admin-panel.herokuapp.com/shelters')
						.then(({ data }) => dispatch(data));
				});
		}
	};

	return (
		<tr>
			<td>{id}</td>
			<td>{title}</td>
			<td>{adress}</td>
			<td>{phoneNumber}</td>
			<td>{email}</td>
			<td>{website}</td>
			<td>{specialization}</td>
			<td><Link to={`/shelter/update/${id}`} className="btn btn-primary">&#10001;</Link></td>
			<td><button type="button" className="btn btn-primary" onClick={onDelete}>&#128465;</button></td>
		</tr>
	);
};

ShelterTr.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	adress: PropTypes.string,
	website: PropTypes.string,
	phoneNumber: PropTypes.string,
	email: PropTypes.string,
	specialization: PropTypes.string,
};

ShelterTr.defaultProps = {
	id: 1,
	title: '',
	adress: '',
	website: '',
	phoneNumber: '',
	email: '',
	specialization: 'Собаки и кошки',
};

export default ShelterTr;
