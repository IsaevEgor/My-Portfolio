import React from 'react';
import style from "./style.module.scss";
  
	interface IProp {
		title: string
	}

const Tag = ({title}: IProp) => {
	console.log(title);
	
	return (
		<div className={style.block}>
			{title}
		</div>
	);
};

export default Tag;