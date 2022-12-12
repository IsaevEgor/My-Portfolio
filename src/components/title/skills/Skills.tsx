import React, { useRef } from 'react';
import style from "./style.module.scss";
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import "./skills-animation.scss";

interface IProps {
	title: string,
	icon?: any
}
  
const Skills = ({title, icon}:IProps) => {
	const contentAnimation = useSelector((state:any) => state.contentAnimation.contentAnimation)
	const nodeRef = useRef(null)

	return (
		<CSSTransition
			in={contentAnimation}
			nodeRef={nodeRef}
			timeout={1000}
			classNames="skills_animation"
			unmountOnExit
		>
			<li ref={nodeRef} className={style.flexBlock}>
				{ icon 
				? <img src={icon} alt="" className={style.iconSection}/>
				: <></>
			}
				<div className={style.textSection}>{title}</div>
			</li>
		</CSSTransition>
	);
};

export default Skills;