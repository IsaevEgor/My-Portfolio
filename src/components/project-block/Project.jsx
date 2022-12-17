import React, { useState } from 'react';
import style from "./style.module.scss";
import classNames from 'classnames';
import Skills from '../title/skills/Skills';

const Project = ({skillsArr, imgProject}) => {
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
						<Skills title={item.name} icon={item.icon}/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;