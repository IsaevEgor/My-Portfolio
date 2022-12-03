import React, { useEffect } from 'react';
import ReactTyped from 'react-typed';
import SocialButton from '../../components/social-button/SocialButton';
import style from './helloBlocks.module.scss'
import 'react-awesome-button/dist/styles.css';
import { useDispatch } from 'react-redux';
import { activePage_1_Action } from '../../store/pageReducer';
import { showContent } from '../../store/contentAnimationReducer';


  
const HelloBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_1_Action())
	}, [])

	return (
		<div className={style.div}>
			<div className={style.typedBlock}>
				<ReactTyped
					strings={
						["Привет!<br/> Меня зовут Исаев Егор.<br/>Я Web-разработчик"]
					}
					typeSpeed={50}
				/>
			</div>
			<SocialButton/>
		</div>
	);
};

export default HelloBlock;