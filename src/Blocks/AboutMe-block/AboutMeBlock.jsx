import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Skills from '../../components/title/skills/Skills';
import Title from '../../components/title/title-classic/Title';
import TitleSmall from '../../components/title/title-small/TitleSmall';
import { showContent } from '../../store/contentAnimationReducer';
import { activePage_2_Action } from '../../store/pageReducer';
import style from "./About-me-block.module.scss";

import IconHTML from "../../assets/Skills-Icon/HTML.svg";
import IconCSS from "../../assets/Skills-Icon/CSS.svg";
import IconJS from "../../assets/Skills-Icon/JS.svg";
import IconReact from "../../assets/Skills-Icon/react.svg";
import IconRedux from "../../assets/Skills-Icon/redux.svg";
import IconSass from "../../assets/Skills-Icon/sass.svg";
import IconLess from "../../assets/Skills-Icon/less.svg";
import IconFigma from "../../assets/Skills-Icon/figma.svg";
import IconPhotoshop from "../../assets/Skills-Icon/photoshop.svg";
import IconTailWind from "../../assets/Skills-Icon/tailwind.svg";
import IconTypeScript from "../../assets/Skills-Icon/typescript.svg";
import IconBootstrap from "../../assets/Skills-Icon/bootstrap.svg";
import IconGit from "../../assets/Skills-Icon/git.svg";
import IconHook from "../../assets/Skills-Icon/hook.png";
import IconRouter from "../../assets/Skills-Icon/router.png";
import VantaRings from '../../components/vanta/rings/vanta';
  
const AboutMeblock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_2_Action())
	}, [])

	return (
		<div className={style.wrapper}>
			<VantaRings/>
			<div className={style.container}>
				<Title name='О Себе'/>
				<p className={style.text}>
					Занимаюсь <span>Front-End</span> разработкой сайтов и интернет-приложений.
				</p>
				<p className={style.text}>
					Имею хорошие знания <span>HTML, CSS, javaScript.</span>
				</p>
				<p className={style.text}>
					В данный момент активно использую и изучаю <span>React </span>в связке с <span>TypeScript.</span>
				</p>
				<p className={style.text}>
					Работаю с системой контроля версий <span>GiT.</span>
				</p>
				<p className={style.text}>
					В проектах использую препроцессоры <span>(SASS, LESS).</span>
				</p>
				<p className={style.text}>
					Постоянно изучаю и внедряю новые технологии в проекты, параллельно усовершенствуя уже полученные знания.
				</p>
				<p className={style.text}>
					Умею работать в команде, <span>целеустремленый, ответственный, коммуникабельный.</span>
				</p>
				<Title name='Навыки'></Title>
				<div className={style.skillsBlock}>
					<Skills title='HTML' icon={IconHTML}/>
					<Skills title='CSS5' icon={IconCSS}/>
					<Skills title='JavaScript' icon={IconJS}/>
					<Skills title='React' icon={IconReact}/>
					<Skills title='React-router' icon={IconRouter}/>
					<Skills title='React-hooks' icon={IconHook}/>
					<Skills title='Redux' icon={IconRedux}/>
					<Skills title='TypeScript' icon={IconTypeScript}/>
					<Skills title='Git' icon={IconGit}/>
					<Skills title='Figma' icon={IconFigma}/>
					<Skills title='Adobe Photoshop' icon={IconPhotoshop}/>
					<Skills title='SASS' icon={IconSass}/>
					<Skills title='LESS' icon={IconLess}/>
					<Skills title='БЭМ'/>
					<Skills title='Tailwind' icon={IconTailWind}/>
					<Skills title='Bootstrap' icon={IconBootstrap}/>
					<Skills title='CSS Transition Group'/>
					<Skills title='Адаптивная верстка'/>

				</div>
			</div>
		</div>
	);
};

export default AboutMeblock;