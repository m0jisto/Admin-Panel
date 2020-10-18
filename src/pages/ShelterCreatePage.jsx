import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FormBlock } from '../components';

import { ContextApp } from '../App';

const ShelterUpdatePage = () => {
	const history = useHistory();
	const { dispatch } = useContext(ContextApp);
	const [inputValue, setInputValue] = useState({
		id: '',
		title: '',
		adress: '',
		phoneNumber: '',
		email: '',
		website: '',
		specialization: '',
	});

	const changeHandler = (e) => setInputValue({ ...inputValue, [e.target.name]: e.target.value });

	const submitHadler = (e) => {
		e.preventDefault();
		if (window.confirm('Вы действительно хотите добавить данный элемент?')) {
			axios.post('/shelters', inputValue)
				.then(() => {
					axios.get('/shelters')
						.then(({ data }) => dispatch(data));
				});
			history.push('/shelters');
		}
	};

	return (
		<div className="mt-3">
			<form onSubmit={submitHadler}>
				<FormBlock text="Название" type="text" name="title" value={inputValue.title} setValue={changeHandler} />
				<FormBlock text="Адрес" type="text" name="adress" value={inputValue.adress} setValue={changeHandler} />
				<FormBlock text="Номер телефона" type="text" name="phoneNumber" value={inputValue.phoneNumber} setValue={changeHandler} />
				<FormBlock text="Email" type="email" name="email" value={inputValue.email} setValue={changeHandler} />
				<FormBlock text="Веб-сайт" type="url" name="website" value={inputValue.website} setValue={changeHandler} />
				<FormBlock text="Специализация" type="text" name="specialization" value={inputValue.specialization} setValue={changeHandler} />
				<button type="submit" className="btn btn-primary mr-3">Добавить</button>
				<Link to="/shelters" className="btn btn-outline-primary">Отмена</Link>
			</form>
		</div>
	);
};

export default ShelterUpdatePage;
