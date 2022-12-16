
import style from "./style.module.scss";
import "./animationafafa.scss";
import { useSelector } from 'react-redux';
import { useRef } from 'react';
  
interface IProps {
	text: string,
}
const AboutText = ({text}:IProps) => {

	return (
		<p className={style.text}>
			{text}
		</p>
	);
};

export default AboutText;