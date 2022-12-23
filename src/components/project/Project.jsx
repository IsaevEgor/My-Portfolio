import React, { useState } from 'react';
import style from "./style.module.scss";
import classNames from 'classnames';
import Skills from '../skills/Skills';
import Tag from '../tags/Tag';
import { AwesomeButton } from 'react-awesome-button';
import { AiFillGithub } from 'react-icons/ai';
import headerImg from "../../assets/work/panel.png";
import { useSelector } from 'react-redux';

const Project = ({skillsArr, imgProject_1, imgProject_2, href, projectName}) => {
	const [hoverImg, setHoverImg] = useState(Boolean);
	const contentAnimation = useSelector(state => state.contentAnimation.contentAnimation)
	return (
		<div className={classNames(style.projectItem, {
			["animate__animated animate__fadeIn"] : contentAnimation,
			["animate__animated animate__fadeOut"] : !contentAnimation
		})}>
			<div 
				className={classNames(style.imageBlock, {[style.hoverImg] : hoverImg})}
				onMouseEnter={() => setHoverImg(true)}
				onMouseLeave={() => setHoverImg(false)}
			>
				<div className={style.imgHeader}>
					 <span className={style.imageName}>{projectName}</span>
					<img src={headerImg} alt="panel" className={style.imgPanel}/>
				</div>
				<img 
					src={imgProject_1} 
					alt="project" 
					className={style.img}
				/>
				<img 
					src={imgProject_2} 
					alt="project" 
					className={classNames(style.imgSecond, {[style.imgSecondActive] : hoverImg})}
				/>
				<div className={classNames(style.skillsProjectBlock, {[style.hoverBlock] : hoverImg})}>
					{skillsArr.map((item) => (
						<Tag hover={hoverImg} title={item.name} icon={item.icon}/>
					))}
				</div>
			</div>
			<AwesomeButton
				type='github'
				size='large'
				href={href}
			>
			<p className={style.textBtn}>Смотреть на <span className={style.icon}><AiFillGithub/></span></p>
			</AwesomeButton>
		</div>
	);
};

export default Project;