import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Title from '../../components/title/title-classic/Title';
import VantaRings from '../../components/vanta/rings/vanta';
import { activePage_3_Action } from '../../store/pageReducer';
import style from "./project-block.module.scss";

import FireMoneyImg_1 from "../../assets/work/FireMoney/FireMoney_1.jpg"
import classNames from 'classnames';
const ProjectsBlock = () => {
	const dispatch = useDispatch()
	const [hoverImg, setHoverImg] = useState(Boolean)

	useEffect(() => {
		dispatch(activePage_3_Action())
	}, [])

	return (
		<div className={style.wrapper}>
			{/*<VantaRings/>*/}
			<Title name='Мои работы'/>
			<p>Здесь вы можете ознакомиться с моими работами и перейти на страницу проекта в гит хабе.</p>
			<div className={style.projectList}>
				<div className={style.projectItem}>
					<div 
						className={classNames(style.imageBlock, {[style.hoverImg] : hoverImg})}
						onMouseEnter={() => setHoverImg(true)}
						onMouseLeave={() => setHoverImg(false)}
					>
						<img 
							src={FireMoneyImg_1} 
							alt="" 
							className={style.img}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsBlock;