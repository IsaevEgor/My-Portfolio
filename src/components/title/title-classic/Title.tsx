import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import style from "./title.module.scss";
import "./animation.scss";

interface IProps {
	name: string
}
interface IState {
	contentAnimation: {
		contentAnimation: boolean
	}
}
  
const Title = ({name}: IProps) => {
	const contentAnimation = useSelector((state:IState) => state.contentAnimation.contentAnimation)
	const nodeRef = useRef(null)
	
	return (
		<CSSTransition
			in={contentAnimation}
			nodeRef={nodeRef}
			timeout={1000}
			classNames="title_animation"
			unmountOnExit
		>
			<h2 ref={nodeRef} className={style.title}>{name}</h2>
		</CSSTransition>
	);
};

export default Title;