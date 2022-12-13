import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import style from "./menu.module.scss";
import { CSSTransition } from 'react-transition-group';
import "./animationMenu.scss";
import { useDispatch, useSelector } from 'react-redux';
import { animationStart, animationStop } from '../../store/mainReducer';
// Рабочая комбинация импортов, с подбором разных тем
//(не сбрасывает стили при перезагрузке страници)
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { hideContent, showContent } from '../../store/contentAnimationReducer';
  
const Menu = ({onClick, slideIndex}:any) => {
	const [isOpen, setisOpen] = useState(false)
	const nodeRef = useRef(null)
	const dispatch = useDispatch()
	const animation = useSelector((state:any) => state.mainAnimation.animation)
	const page = useSelector((state:any) => state.page.page)

	const handleBlockClick = (num:number) => {
		onClick(num)
	}

	const checkIndexSlide = (buttonIndex:number) => {
		if (page == buttonIndex) {
			dispatch(animationStop())
		} else {
			dispatch(animationStart())
		}
	}

	return (
		<CSSTransition 
			in={animation}
			nodeRef={nodeRef}
			classNames="menu"
			timeout={1800}
			exit={false}
			onEntered={() => {
				dispatch(animationStop())
				setisOpen(false)
			}}
		>
			<div className={style.wrapper}>
				<ul 
					ref={nodeRef}
					className={classNames(style.block, {[style._isOpen] : isOpen}, {'_isOpened' : isOpen})}
				>
					<li
						className={style.MenuItem}>
						<AwesomeButton 
							type='primary' 
							size='medium'
							ripple={true}
							className={classNames({"__active-aws-btn" : page === 1})}
							onPress={() => {
								handleBlockClick(0)
								checkIndexSlide(1)
								dispatch(hideContent())
							}}
						>
							Привет!
						</AwesomeButton>
					</li>
					<li
						className={classNames(style.MenuItem, {[style.itemActive] : page == 2})}>
						<AwesomeButton 
							type='primary' 
							size='medium'
							ripple={true}
							className={classNames({"__active-aws-btn" : page === 2})}
							active={page === 2 ? true : false}
							onPress={() => {
								handleBlockClick(1)
								checkIndexSlide(2)
								dispatch(hideContent())
							}}
						>
							О Себе
						</AwesomeButton>
					</li>
					<li
						className={classNames(style.MenuItem, {[style.itemActive] : page == 3})}>
						<AwesomeButton 
							type='primary' 
							size='medium'
							ripple={true}
							className={classNames({"__active-aws-btn" : page === 3})}
							active={page === 3 ? true : false}
							onPress={() => {
								handleBlockClick(2)
								checkIndexSlide(3)
								dispatch(hideContent())
							}}
						>
							Проекты
						</AwesomeButton>
					</li>
					<li
						className={classNames(style.MenuItem, {[style.itemActive] : page == 4})}>
						<AwesomeButton 
							type='primary' 
							size='medium'
							ripple={true}
							className={classNames({"__active-aws-btn" : page === 4})}
							active={page === 4 ? true : false}
							onPress={() => {
								handleBlockClick(3)
								checkIndexSlide(4)
								dispatch(hideContent())
							}}
						>
							Контакты
						</AwesomeButton>
					</li>
				</ul>
				<div
					onClick={() => setisOpen(!isOpen)}
					className={classNames(style.burger, {[style._isOpen]: isOpen})}
				>
					<span></span>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Menu;