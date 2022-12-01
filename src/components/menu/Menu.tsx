import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import style from "./menu.module.scss";
import { CSSTransition } from 'react-transition-group';
import "./animationMenu.scss";
import { useDispatch, useSelector } from 'react-redux';
  
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
			dispatch({type: "ANIMATION_STOP"})
		} else {
			dispatch({type: "ANIMATION_START"})
		}
	}

	return (
		<CSSTransition 
			in={animation}
			nodeRef={nodeRef}
			classNames="menu"
			timeout={2000}
			exit={false}
			onEntered={() => {
				dispatch({type: "ANIMATION_STOP"})
				setisOpen(false)
			}}
		>
			<div className={style.wrapper}>
				<ul 
					ref={nodeRef}
					className={classNames(style.block, {[style._isOpen] : isOpen})}
				>
					<li
						id='1'
						onClick={() => {
							handleBlockClick(0)
							checkIndexSlide(1)
						}} 
						className={classNames(style.MenuItem, {[style.itemActive] : page == 1})}>
							О Себе
					</li>
					<li
						id='1'
						onClick={() => {
							handleBlockClick(1)
							checkIndexSlide(2)
						}} 
						className={classNames(style.MenuItem, {[style.itemActive] : page == 2})}>
							Навыки
					</li>
					<li
						id='2'
						onClick={() => {
							handleBlockClick(2)
							checkIndexSlide(3)
						}} 
						className={classNames(style.MenuItem, {[style.itemActive] : page == 3})}>
							Проекты
					</li>
					<li
						id='3'
						onClick={() => {
							handleBlockClick(3)
							checkIndexSlide(4)
						}} 
						className={classNames(style.MenuItem, {[style.itemActive] : page == 4})}>
							Контакты
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