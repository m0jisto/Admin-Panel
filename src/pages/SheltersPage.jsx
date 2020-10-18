import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import nextId from 'react-id-generator';
import axios from 'axios';

import { ContextApp } from '../App';
import { ShelterTr } from '../components';

const SheltersPage = () => {
	const { state, dispatch } = useContext(ContextApp);

	useEffect(() => {
		axios.get('/shelters')
			.then(({ data }) => dispatch(data));
	}, [dispatch]);

	if (typeof state !== 'object' || state.length === 0) return <></>;

	return (
		<>
			<table className="table mt-3">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Название</th>
						<th scope="col">Адрес</th>
						<th scope="col">Телефон</th>
						<th scope="col">Email</th>
						<th scope="col">Веб-сайт</th>
						<th scope="col">Специализация</th>
						<td />
						<td />
					</tr>
				</thead>
				<tbody>
					{
						state.map((item) => <ShelterTr key={nextId()} {...item} />)
					}
				</tbody>
			</table>
			<Link to="/shelters/create" className="btn btn-primary">Создать новый приют</Link>
		</>
	);
};

export default SheltersPage;
