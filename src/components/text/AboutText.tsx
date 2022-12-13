import style from "./style.module.scss";
import "./animation.scss";
  
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