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
import { activePage_1_Action, activePage_2_Action, activePage_3_Action, activePage_4_Action } from '../../store/pageReducer';

interface IStatePlay {
	play: {
		startPlay: boolean;
	}
}

const Menu = ({slideIndex}:any) => {
	const [isOpen, setisOpen] = useState(false)
	const nodeRef = useRef(null)
	const dispatch = useDispatch()
	const animation = useSelector((state:any) => state.mainAnimation.animation)
	const play = useSelector((state:IStatePlay) => state.play.startPlay);
	const page = useSelector((state:any) => state.page.page)

	const checkIndexSlide = (buttonIndex:number) => {
		if (page == buttonIndex) {
			dispatch(animationStop())
		} else {
			dispatch(animationStart())
			dispatch(hideContent())
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
					className={classNames(style.block, 
						{[style._isOpen] : isOpen},
						{'_isOpened' : isOpen},
						{[style.goTop] : play}
						)}
				>
					<li
						className={style.MenuItem}>
						<AwesomeButton 
							type='primary' 
							size='medium'
							ripple={true}
							className={classNames({"__active-aws-btn" : page === 1})}
							onPress={() => {
								checkIndexSlide(1)
								dispatch(activePage_1_Action())
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
								checkIndexSlide(2)
								dispatch(activePage_2_Action())
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
								checkIndexSlide(3)
								dispatch(activePage_3_Action())
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
								checkIndexSlide(4)
								dispatch(activePage_4_Action())
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