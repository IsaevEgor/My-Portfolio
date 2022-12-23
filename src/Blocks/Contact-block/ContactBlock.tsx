import React, { useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { AiFillGithub } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import SocialButton from '../../components/social-button/SocialButton';
import Title from '../../components/title/title-classic/Title';
import VantaRings from '../../components/vanta/rings/vanta';
import VantaTopology from '../../components/vanta/topology/vanta';
import { activePage_4_Action } from '../../store/pageReducer';
import style from "./contact-block.module.scss";

import VkIcon from "../../assets/Skills-Icon/vk.png";
import WhatsappIcon from "../../assets/Skills-Icon/whatsapp.svg";
import TelegramIcon from "../../assets/Skills-Icon/telegram.svg";
import Gmailicon from "../../assets/Skills-Icon/gmail.svg";
import GitIcon from "../../assets/Skills-Icon/git.svg";
import classNames from 'classnames';

interface iState {
	contentAnimation: {
		contentAnimation:boolean
	}
}

const ContactBlock = () => {
	const dispatch = useDispatch()
	const contentAnimation = useSelector((state:iState) => state.contentAnimation.contentAnimation)

	useEffect(() => {
		dispatch(activePage_4_Action())
	}, [])

	return (
		<div className={style.container}>
			<VantaRings/>
			<div className={style.block}>
				<p className={classNames(style.text, {
					["animate__animated animate__fadeInLeft"] : contentAnimation,
					["animate__animated animate__fadeOutRight"] : !contentAnimation
				})}>Если у Вас есть вопросы ко мне, вы можете задать их любым удобным для Вас способом.<br/>Так же сдесь Вы можете ознакомится с моим прфилем на Git-Hub</p>
				<div className={style.btnBlock}>
					<div className={classNames({
						["animate__animated animate__fadeInDown animate__delay-4s"] : contentAnimation,
						["animate__animated animate__fadeOutDown animate__delay-4s animate__faster"] : !contentAnimation
					})}>
						<AwesomeButton
							type='messenger'
							size='large'
						>
							<span className={style.textIcon}><img className={style.icon} src={VkIcon} alt="vk" /> Vkontakte</span> 
						</AwesomeButton>
					</div>
					<div className={classNames({
						["animate__animated animate__fadeInDown animate__delay-3s"] : contentAnimation,
						["animate__animated animate__fadeOutDown animate__delay-3s animate__faster"] : !contentAnimation
					})}>
						<AwesomeButton
							type='whatsapp'
							size='large'
						>
							<span className={style.textIcon}><img className={style.icon} src={WhatsappIcon} alt="whatsapp" /> Whatsapp</span> 
						</AwesomeButton>
					</div>
					<div className={classNames({
						["animate__animated animate__fadeInDown animate__delay-2s"] : contentAnimation,
						["animate__animated animate__fadeOutDown animate__delay-2s animate__faster"] : !contentAnimation
					})}>
						<AwesomeButton
							type='facebook'
							size='large'
						>
							<span className={style.textIcon}><img className={style.icon} src={TelegramIcon} alt="telegram" /> Telegramm</span> 
						</AwesomeButton>
					</div>
					<div className={classNames({
						["animate__animated animate__fadeInDown animate__delay-1s"] : contentAnimation,
						["animate__animated animate__fadeOutDown animate__delay-1s animate__faster"] : !contentAnimation
					})}>
						<AwesomeButton
							type='danger'
							size='large'
						>
							<span className={style.textIcon}><img className={style.icon} src={Gmailicon} alt="gmail" /> GMail</span> 
						</AwesomeButton>
					</div>
					<div className={classNames({
						["animate__animated animate__fadeInDown"] : contentAnimation,
						["animate__animated animate__fadeOutDown animate__faster"] : !contentAnimation
					})}>
						<AwesomeButton
							type='github'
							size='large'
						>
							<span className={style.textIcon}><img className={style.icon} src={GitIcon} alt="git-hub"/> Git-Hub</span>
						</AwesomeButton>
					</div>
				</div>
				<div className={classNames(style.productText, {
					["animate__animated animate__fadeInUp animate__delay-2s"] : contentAnimation,
					["animate__animated animate__fadeOutDown"] : !contentAnimation,
				})}>
					developed by <span className={style.textColor}>Egor Isaev.</span>
				</div>
			</div>
		</div>
	);
};

export default ContactBlock;