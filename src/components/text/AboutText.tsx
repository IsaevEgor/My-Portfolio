import style from "./style.module.scss";
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import classNames from "classnames";
  
interface IProps {
	text: string,
}
interface IState {
	contentAnimation: {
		contentAnimation:boolean
	}
}
const AboutText = ({text}:IProps) => {
	const contentAnimation = useSelector((state:IState) => state.contentAnimation.contentAnimation)

	return (
		<p className={classNames(style.text, {
			["animate__animated animate__fadeInRight"] : contentAnimation,
			["animate__animated animate__fadeOutLeft"] : !contentAnimation
		})}
		>
			{text}
		</p>
	);
};

export default AboutText;