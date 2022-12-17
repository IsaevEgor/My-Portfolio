import React, { useRef, useState } from 'react';
import style from "./style.module.scss";
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import "./skills-animation.scss";
import 'animate.css';
import classNames from 'classnames';

interface IProps {
	title: string,
	icon?: any
}
interface iState {
	contentAnimation: {
		contentAnimation: boolean
	}
}
  
const Skills = ({title, icon}:IProps) => {
	const contentAnimation = useSelector((state:iState) => state.contentAnimation.contentAnimation)
	const nodeRef = useRef(null)
	const [hover, setHover] = useState(Boolean)

	return (
		<CSSTransition
			in={contentAnimation}
			nodeRef={nodeRef}
			timeout={1000}
			classNames="skills_animation"
			unmountOnExit
		>
			<li 
				ref={nodeRef} 
				className={classNames(style.flexBlock, {
					["animate__animated animate__headShake"]: hover
				})}
				onMouseEnter={() => {
					setHover(true)
					setTimeout(() => {
						setHover(false)
					}, 900);
				}}
			>
				{ icon 
				? <img src={icon} alt="" className={style.iconSection}/>
				: <></>
			}
				<p 
					className={style.textSection}
				>
					{title}
				</p>
			</li>
		</CSSTransition>
	);
};

export default Skills;