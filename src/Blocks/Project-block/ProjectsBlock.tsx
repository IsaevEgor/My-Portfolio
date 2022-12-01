import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import style from "./project-block.module.scss";
  
const ProjectsBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch({type: 'PAGE_3'})
	}, [])

	return (
		<div>
			
		</div>
	);
};

export default ProjectsBlock;