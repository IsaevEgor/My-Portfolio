import React, { useState } from 'react';
import style from "./style.module.scss";
import classNames from 'classnames';
import Skills from '../skills/Skills';
import Tag from '../tags/Tag';
import { AwesomeButton } from 'react-awesome-button';
import { AiFillGithub } from 'react-icons/ai';
//import "react-awesome-button/dist/styles.css";
//import 'react-awesome-button/src/styles/themes/theme-rickiest';

const Project = ({skillsArr, imgProject, href}) => {
	const [hoverImg, setHoverImg] = useState(Boolean)
	return (
		<div className={style.projectItem}>
			<div 
				className={classNames(style.imageBlock, {[style.hoverImg] : hoverImg})}
				onMouseEnter={() => setHoverImg(true)}
				onMouseLeave={() => setHoverImg(false)}
			>
				<img 
					src={imgProject} 
					alt="" 
					className={style.img}
				/>
				<div className={classNames(style.skillsProjectBlock, {[style.hoverBlock] : hoverImg})}>
					{skillsArr.map((item) => (
						<Tag title={item.name} icon={item.icon}/>
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