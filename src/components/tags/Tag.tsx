import classNames from 'classnames';
import React from 'react';
import style from "./style.module.scss";
  
	interface IProp {
		title: string,
		hover: boolean
	}

const Tag = ({title, hover}: IProp) => {
	
	return (
		<div className={classNames(style.block, {["animate__animated animate__bounceInUp"] : hover})}>
			{title}
		</div>
	);
};

export default Tag;