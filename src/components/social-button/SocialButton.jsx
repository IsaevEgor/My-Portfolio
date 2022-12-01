import React from 'react';
import style from "./socialButton.module.scss";

import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

// Рабочая комбинация импортов, с подбором разных тем
//(не сбрасывает стили при перезагрузке страници)
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import 'react-awesome-button/src/styles/themes/theme-rickiest';

// для изменения дефолтных стилей кнопки (идет последним)
import "./githubBtn.css";
const SocialButton = () => {

	return (
		<div className={style.btnBlock}>
			<AwesomeButton
				type='messenger'
				size='medium'
				href='https://vk.com/id68402157'
			>
				<span className={style.textBtn}><AiOutlineUser/><p>VKontakte</p></span>
			</AwesomeButton>
			<AwesomeButton
				type='linkedin'
				size='medium'
				href='https://t.me/Egor_i_saev'
			>
				<span className={style.textBtn}><FaTelegramPlane/><p>Telegram</p></span>
			</AwesomeButton>
			<AwesomeButton
				type='github'
				size='medium'
				href='https://github.com/IsaevEgor'
			>
				<span className={style.textBtn}><AiFillGithub/><p>GitHub</p></span>
			</AwesomeButton>
		</div>
	);
};

export default SocialButton;