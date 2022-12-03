import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/cube-animation/cube-animation.scss';
import { useDispatch, useSelector } from 'react-redux';
import ContactBlock from '../../Blocks/Contact-block/ContactBlock';
import HelloBlock from '../../Blocks/Hello-block/HelloBlock';
import ProjectsBlock from '../../Blocks/Project-block/ProjectsBlock';
import Skillsblock from '../../Blocks/Skills-block/SkillsBlock';
import { animationStart } from '../../store/mainReducer';

import Menu from '../menu/Menu';
import "./slider.scss";
  
const Slider = () => {
	const [numSelect, setNumSelect] = useState(0)
	const dispatch = useDispatch()
	const animation = useSelector((state:any) => state.mainAnimation.animation)

	console.log(animation);

	const hadleBlockClick = (numberBlock:any) => {
		setNumSelect(numberBlock)
		
	}

	return (
			<div className='fullPage'>
				<AwesomeSlider
					animation="cubeAnimation"
					cssModule={[CoreStyles, AnimationStyles]}
					bullets={false}
					fillParent={true}
					organicArrows={true}
					infinite={false}
					selected={numSelect}
					transitionDelay={500}
					customContent={<Menu slideIndex={numSelect} onClick={hadleBlockClick}/>}
					onTransitionRequest={() => dispatch(animationStart())}
				>
					<div><HelloBlock/></div>
					<div><Skillsblock/></div>
					<div><ProjectsBlock/></div>
					<div><ContactBlock/></div>
				  </AwesomeSlider>
			</div>
		);
};

export default Slider;