import React, { useEffect } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { AiFillGithub } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
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
const ContactBlock = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(activePage_4_Action())
	}, [])

	return (
		<div className={style.container}>
			<VantaRings/>
			<div className={style.block}>
				<p className={style.text}>Если у Вас есть вопросы ко мне, вы можете задать их любым удобным для Вас способом.<br/>Так же сдесь Вы можете ознакомится с моим прфилем на Git-Hub</p>
				<div className={style.btnBlock}>
					<AwesomeButton
						type='messenger'
						size='large'
					>
						<span className={style.textIcon}><img className={style.icon} src={VkIcon} alt="vk" /> Vkontakte</span> 
					</AwesomeButton>
					<AwesomeButton
						type='whatsapp'
						size='large'
					>
						<span className={style.textIcon}><img className={style.icon} src={WhatsappIcon} alt="whatsapp" /> Whatsapp</span> 
					</AwesomeButton>
					<AwesomeButton
						type='facebook'
						size='large'
					>
						<span className={style.textIcon}><img className={style.icon} src={TelegramIcon} alt="telegram" /> Telegramm</span> 
					</AwesomeButton>
					<AwesomeButton
						type='danger'
						size='large'
					>
						<span className={style.textIcon}><img className={style.icon} src={Gmailicon} alt="gmail" /> GMail</span> 
					</AwesomeButton>
					<AwesomeButton
						type='github'
						size='large'
					>
						<span className={style.textIcon}><img className={style.icon} src={GitIcon} alt="git-hub"/> Git-Hub</span>
					</AwesomeButton>
				</div>
				<div className={style.productText}>
					developed by <span className={style.textColor}>Egor Isaev.</span>
				</div>
			</div>
		</div>
	);
};

export default ContactBlock;