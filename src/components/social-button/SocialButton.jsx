import React, { useEffect, useRef, useState } from 'react';
import style from "./socialButton.module.scss";
import {CSSTransition} from "react-transition-group";
import "./animation.scss";


import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

// Рабочая комбинация импортов, с подбором разных тем
//(не сбрасывает стили при перезагрузке страници)
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/src/styles/themes/theme-rickiest';

// для изменения дефолтных стилей кнопки (идет последним)
import "../../Ui/style-for-awesome_Btn/styleBtn.scss";
import { useDispatch, useSelector } from 'react-redux';


const SocialButton = () => {
	const contentAnimation = useSelector((state) => state.contentAnimation.contentAnimation)
	const nodeRef = useRef(null)
	const [sizeButton, setSizeButton] = useState("medium")

	useEffect(() => {
		const windowWidth = window.innerWidth;
		const mobile = 500;
		const smallMobile = 310;
		if (windowWidth <= mobile) {
			setSizeButton("small")
			if (windowWidth <= smallMobile) {
				setSizeButton("icon")
			}
		}
	}, [])

	return (
		<div className={style.btnBlock}>
			<CSSTransition
				in={contentAnimation}
				nodeRef={nodeRef}
				timeout={1000}
				classNames="social_btn_animation"
				unmountOnExit
			>
			<div ref={nodeRef}>
				<div className={style.button}>
					<AwesomeButton
						type='messenger'
						size={sizeButton}
						href='https://vk.com/id68402157'
					>
						<span className={style.textBtn}><AiOutlineUser/><p>VKontakte</p></span>
					</AwesomeButton>
				</div>
				<div className={style.button}>
					<AwesomeButton
						type='linkedin'
						size={sizeButton}
						href='https://t.me/Egor_i_saev'
					>
						<span className={style.textBtn}><FaTelegramPlane/><p>Telegram</p></span>
					</AwesomeButton>
				</div>
				<div className={style.button}>
					<AwesomeButton
						type='github'
						size={sizeButton}
						href='https://github.com/IsaevEgor'
					>
						<span className={style.textBtn}><AiFillGithub/><p>GitHub</p></span>
					</AwesomeButton>
				</div>
			</div>
			</CSSTransition>
		</div>
	);
};

export default SocialButton;