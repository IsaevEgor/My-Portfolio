import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import VantaRings from '../../components/vanta/rings/vanta';
import { activePage_3_Action } from '../../store/pageReducer';
import style from "./project-block.module.scss";

const ProjectsBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_3_Action())
	}, [])

	return (
		<div className={style.block}>
			{/*<VantaRings/>*/}
		</div>
	);
};

export default ProjectsBlock;