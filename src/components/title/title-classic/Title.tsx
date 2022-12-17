import React from 'react';
import { useSelector } from 'react-redux';
import style from "./title.module.scss";
import "./animation.scss";
import classNames from 'classnames';

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
	
	return (
			<h2 
				className={classNames(style.title, {
					["animate__animated animate__fadeInLeft"] : contentAnimation,
					["animate__animated animate__fadeOutRight"] : !contentAnimation}
				)}
			>
				{name}
			</h2>
	);
};

export default Title;