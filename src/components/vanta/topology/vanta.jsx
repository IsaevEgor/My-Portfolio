import { useState, useEffect, useRef } from 'react'
import TOPOLOGY from 'vanta/dist/vanta.halo.min'
import style from "./vanta.module.scss";

const VantaTopology = (props) => {
	const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(TOPOLOGY({
			el: myRef.current,
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.00,
			minWidth: 200.00,
			scale: 1.00,
			scaleMobile: 1.00,
			color: 0xc3fa00
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])
	return <div className={style.vanta} ref={myRef}>
	  Foreground content goes here
	</div>
  }

  export default VantaTopology;