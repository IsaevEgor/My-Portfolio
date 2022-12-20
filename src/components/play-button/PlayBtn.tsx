import React, { useState } from 'react';
import style from "./style.module.scss";

import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { hideContent, showContent } from '../../store/contentAnimationReducer';
import { animationStart, animationStop } from '../../store/mainReducer';
import { startPlay, stopPlay } from '../../store/playReducer';
  
	interface IStateMainAnimation {
		mainAnimation: {
			animation: boolean
		}
	}


const PlayBtn = () => {
	const dispatch = useDispatch();
	const contantAnimation = useSelector((state:IStateMainAnimation) => state.mainAnimation.animation)
	const [play, setPlay] = useState(false);
	const [showPlayBtn, setShowPlayBtn] = useState(false)
	
	return (
		<div className={classNames(style.container, {
			["animate__animated animate__backOutLeft"] : contantAnimation,
			})}>
			<div className={style.playBtn}>
				<div className={classNames(style.PlayOut, {
						["animate__animated animate__bounceIn animate__delay-3s"] : play,
						["animate__animated animate__bounceOut animate__delay-0s"] : !play,
						[style.visibleBlock] : showPlayBtn
						})}>
						<AwesomeButtonProgress
							type='danger'
							loadingLabel='Выполняю'
							resultLabel='Готово!'
							releaseDelay={2500}
							onReleased={() => setShowPlayBtn(false)}
							onPress={(element, next) => {
								setTimeout(() => {
									next()
									dispatch(showContent())
									dispatch(stopPlay())
									setPlay(false)
								}, 1000)
							}}
						>
							Назад
						</AwesomeButtonProgress>
					  </div>
					<div className={classNames(style.PlayIn, {
						["animate__animated animate__bounceIn animate__delay-5s"] : !play,
						["animate__animated animate__hinge animate__delay-1s"] : play
					
						})}>
						<AwesomeButtonProgress
							type='danger'
							loadingLabel='Секунду...'
							resultLabel='Удачи!'
							releaseDelay={2500}
							onPress={(element, next) => {
								setTimeout(() => {
									next()
									dispatch(hideContent())
									dispatch(startPlay())
									setPlay(true)
									setShowPlayBtn(true)
								}, 1500)
							}}
						>
							Попробуй разогнать птичек :)
						</AwesomeButtonProgress>
					  </div>
			</div>
		</div>
	);
};

export default PlayBtn;