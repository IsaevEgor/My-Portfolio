import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from "./contact-block.module.scss";
  
const ContactBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({type: 'PAGE_4'})
	}, [])

	return (
		<div>
			
		</div>
	);
};

export default ContactBlock;