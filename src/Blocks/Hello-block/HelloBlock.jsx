import React, { useEffect, useRef, useState } from 'react';
import ReactTyped from 'react-typed';
import SocialButton from '../../components/social-button/SocialButton';
import 'react-awesome-button/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { activePage_1_Action } from '../../store/pageReducer';
import { CSSTransition } from "react-transition-group";

import style from './helloBlocks.module.scss'
import "./for-typing-text.scss";
import "./animation.scss";
import VantaBirds from '../../components/vanta/birds/vanta';
import PlayBtn from '../../components/play-button/PlayBtn';
  
const HelloBlock = () => {
	const dispatch = useDispatch()
	const contentAnimation = useSelector((state => state.contentAnimation.contentAnimation))
	const nodeRef = useRef(null)
	const [printed, setPrinted] = useState(false)

	useEffect(() => {
		dispatch(activePage_1_Action())
	}, [])

	return (
		<div className={style.div}>
			<VantaBirds/>
			<CSSTransition
				in={contentAnimation}
				nodeRef={nodeRef}
				timeout={800}
				classNames="typing-Css_animation"
				unmountOnExit
			>
				<div ref={nodeRef} className={style.typedBlock}>
					{printed 
					? <div>Привет!<br/> Меня зовут Егор Исаев! Я - Front-end разработчик.<br/>Разрабатываю и усовершенствую пользовательские интерфейсы и приложения.<br/>Делаю мир интернета немного красивее и удобнее ;)</div>
					: <ReactTyped
					strings={
						["Привет!<br/> Меня зовут Егор Исаев! Я - Front-end разработчик.<br/>Разрабатываю и усовершенствую пользовательские интерфейсы и приложения.<br>Делаю мир интернета немного красивее и удобнее ;)</br>"]
					}
					typeSpeed={30}
					onComplete={() => setPrinted(true)}
				/>
				}
				</div>
			</CSSTransition>
			<PlayBtn/>
			<SocialButton/>
		</div>
	);
};

export default HelloBlock;