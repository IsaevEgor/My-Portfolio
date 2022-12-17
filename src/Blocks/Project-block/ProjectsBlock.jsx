import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Title from '../../components/title/title-classic/Title';
import VantaRings from '../../components/vanta/rings/vanta';
import { activePage_3_Action } from '../../store/pageReducer';
import style from "./project-block.module.scss";

import FireMoneyImg_1 from "../../assets/work/FireMoney/FireMoney_1.jpg";
import HappyImg_1 from "../../assets/work/Happy/HappyProject.png";
import Infinizai_1 from "../../assets/work/Infinizai/Infinizal.png";

import Skills from '../../components/title/skills/Skills';
import Project from '../../components/project-block/Project';
import { fireMoneyArr, happyProjectArr, infinizaiProjectArr } from '../../SkillsArray';

const ProjectsBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_3_Action())
	}, [])

	return (
		<div className={style.wrapper}>
			{/*<VantaRings/>*/}
			<Title name='Мои работы'/>
			<p className={style.textProject}>Здесь вы можете ознакомиться с моими работами и перейти на страницу проекта в гит хабе.</p>
			<div className={style.projectList}>
				<Project skillsArr={fireMoneyArr} imgProject={FireMoneyImg_1}/>
				<Project skillsArr={happyProjectArr} imgProject={HappyImg_1}/>
				<Project skillsArr={infinizaiProjectArr} imgProject={Infinizai_1}/>
			</div>
		</div>
	);
};

export default ProjectsBlock;