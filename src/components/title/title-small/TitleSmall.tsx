import React from 'react';
import style from "./title-small.module.scss";
  
interface IProps {
	name: string
}

const TitleSmall = ({name}:IProps) => {
	return (
		<h3 className={style.title}>{name}</h3>
	);
};

export default TitleSmall;