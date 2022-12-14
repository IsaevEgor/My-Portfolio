import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import { useDispatch, useSelector } from 'react-redux';
import ContactBlock from '../../Blocks/Contact-block/ContactBlock';
import HelloBlock from '../../Blocks/Hello-block/HelloBlock';
import ProjectsBlock from '../../Blocks/Project-block/ProjectsBlock';
import AboutMeblock from '../../Blocks/AboutMe-block/AboutMeBlock';
import { hideContent, showContent } from '../../store/contentAnimationReducer';
import { animationStart } from '../../store/mainReducer';

import Menu from '../menu/Menu';
import "./slider.scss";
  
const Slider = () => {
	const [numSelect, setNumSelect] = useState(0)
	const dispatch = useDispatch()
	const animation = useSelector((state:any) => state.mainAnimation.animation)
	const contentAnimation = useSelector(((state:any) => state.contentAnimation.contentAnimation))
	const page = useSelector(((state:any) => state.page.page))

	const handleBlockChange = () => {
		dispatch(animationStart())
		dispatch(hideContent())
	}

	return (
			<AwesomeSlider
				animation="cubeAnimation"
				cssModule={[CoreStyles, AnimationStyles]}
				bullets={false}
				fillParent={true}
				organicArrows={true}
				infinite={false}
				selected={page - 1}
				transitionDelay={500}
				mobileTouch={false}
				customContent={<Menu slideIndex={numSelect}/>}
				onTransitionRequest={() => handleBlockChange()}
				onTransitionEnd={() => dispatch(showContent())}
			>
				<div><HelloBlock/></div>
				<div><AboutMeblock/></div>
				<div><ProjectsBlock/></div>
				<div><ContactBlock/></div>
			  </AwesomeSlider>
		);
};

export default Slider;