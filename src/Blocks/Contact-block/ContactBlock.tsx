import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activePage_4_Action } from '../../store/pageReducer';
import style from "./contact-block.module.scss";
  
const ContactBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_4_Action())
	}, [])

	return (
		<div>
			
		</div>
	);
};

export default ContactBlock;