import { useState, useEffect, useRef } from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import style from "./vanta.module.scss";

const VantaBirds = (props) => {
	const [vantaEffect, setVantaEffect] = useState(null)
	const myRef = useRef(null)
	useEffect(() => {
	  if (!vantaEffect) {
		setVantaEffect(BIRDS({
		  el: myRef.current,
		  mouseControls: true,
		  touchControls: true,
		  gyroControls: false,
		  minHeight: 200.00,
		  minWidth: 200.00,
		  scale: 1.00,
		  scaleMobile: 1.00,
		  birdSize: 1,
		  colorMode: "variance"
		}))
	  }
	  return () => {
		if (vantaEffect) vantaEffect.destroy()
	  }
	}, [vantaEffect])
	return <div className={style.vanta} ref={myRef}></div>
  }

  export default VantaBirds;