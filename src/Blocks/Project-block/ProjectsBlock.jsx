import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../../components/title/title-classic/Title';
import VantaRings from '../../components/vanta/rings/vanta';
import { activePage_3_Action } from '../../store/pageReducer';
import style from "./project-block.module.scss";

import FireMoneyImg_1 from "../../assets/work/FireMoney/FireMoney.png";
import FireMoneyImg_2 from "../../assets/work/FireMoney/FireMoney_2.png";
import HappyImg_1 from "../../assets/work/Happy/Happy.png";
import HappyImg_2 from "../../assets/work/Happy/Happy_2.png";
import Infinizai_1 from "../../assets/work/Infinizai/Infinizal.png";
import Infinizai_2 from "../../assets/work/Infinizai/Infinizai_2.png";

import Skills from '../../components/skills/Skills';
import Project from '../../components/project/Project';
import { fireMoneyArr, happyProjectArr, infinizaiProjectArr } from '../../SkillsArray';
import Tag from '../../components/tags/Tag';
import classNames from 'classnames';

const ProjectsBlock = () => {
	const dispatch = useDispatch()
	const contentAnimation = useSelector(state => state.contentAnimation.contentAnimation)

	useEffect(() => {
		dispatch(activePage_3_Action())
	}, [])

	return (
		<div className={style.wrapper}>
			<VantaRings/>
			<div className={style.container}>
				<Title name='Мои работы'/>
				<p className={classNames(style.textProject, {
					["animate__animated animate__lightSpeedInRight"] : contentAnimation,
					["animate__animated animate__lightSpeedOutLeft"] : !contentAnimation
				})}>
					Здесь вы можете ознакомиться с моими работами и перейти на страницу проекта на <a href='https://github.com/IsaevEgor'>Git-Hub.</a>
				</p>
				<div className={style.projectList}>
					<Project
						projectName="Fire Money"
						skillsArr={fireMoneyArr} 
						imgProject_1={FireMoneyImg_1}
						imgProject_2={FireMoneyImg_2}
						href={"https://github.com/IsaevEgor/Fire-Money"}
					/>
					<Project
						projectName="H(app)y"
						skillsArr={happyProjectArr} 
						imgProject_1={HappyImg_1}
						imgProject_2={HappyImg_2}
						href={"https://github.com/IsaevEgor/H-app-y-Project"}
					/>
					<Project
						projectName="Infinizai"
						skillsArr={infinizaiProjectArr} 
						imgProject_1={Infinizai_1}
						imgProject_2={Infinizai_2}
						href={"https://github.com/IsaevEgor/Infinizal"}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsBlock;