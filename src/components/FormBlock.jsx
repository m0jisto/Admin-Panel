import React from 'react';
import PropTypes from 'prop-types';

const FormBlock = ({ text, type, name, value, setValue }) => (
	<div className="form-group">
		<label className="pl-2" htmlFor={name}>{text}</label>
		<input type={type} name={name} className="form-control pl-2" value={value} onChange={setValue} required />
	</div>
);

FormBlock.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	setValue: PropTypes.func,
};

FormBlock.defaultProps = {
	text: '',
	type: 'text',
	name: '',
	value: '',
	setValue: () => {},
};

export default FormBlock;
