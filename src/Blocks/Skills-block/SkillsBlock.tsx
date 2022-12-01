import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from "./skills.module.scss";
  
const Skillsblock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({type: 'PAGE_2'})
	}, [])

	return (
		<div>
			
		</div>
	);
};

export default Skillsblock;