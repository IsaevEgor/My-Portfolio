import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { activePage_2_Action } from '../../store/pageReducer';
import style from "./skills.module.scss";
  
const Skillsblock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_2_Action())
	}, [])

	return (
		<div>
			
		</div>
	);
};

export default Skillsblock;