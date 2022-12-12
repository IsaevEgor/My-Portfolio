import React from 'react';
import style from "./title.module.scss";

interface IProps {
	name: string
}
  
const Title = ({name}: IProps) => {
	return (
		<h2 className={style.title}>{name}</h2>
	);
};

export default Title;