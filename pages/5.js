import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function CollorChooser() {
	const [red, setRed] = React.useState(120);
	const [green, setgreen] = React.useState(160);
	const [blue, setblue] = React.useState(100);

	function onRedChange(event) {
		setRed(Number(event.target.value));
	}
	function onGreenChange(event) {
		setgreen(Number(event.target.value));
	}
	function onBlueChange(event) {
		setblue(Number(event.target.value));
	}

	function formatRGB(red, green, blue) {
		return `rgba(${red},${green},${blue}, 1)`
	}

	function convertRGBToHex(red, green, blue) {
		let r = red.toString(16);
		let g = green.toString(16);
		let b = blue.toString(16);

		if (r.length == 1)
			r = "0" + r;
		if (g.length == 1)
			g = "0" + g;
		if (b.length == 1)
			b = "0" + b;

		return "#" + r + g + b;
	}

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[240px]'>
					<h1 className='my-4 text-xl'>Color chooser</h1>
					<p>R</p>
					<input
						className='w-3/4 mr-4'
						value={red}
						name='red'
						type='range'
						min='0'
						max='255'
						onChange={onRedChange} />
					<label htmlFor='red'>{red}</label>
					<p>G</p>
					<input
						className='w-3/4 mr-4'
						value={green}
						name='green'
						type='range'
						min='0'
						max='255'
						onChange={onGreenChange} />
					<label htmlFor='blue'>{green}</label>
					<p>B</p>
					<input
						className='w-3/4 mr-4'
						value={blue}
						name='blue'
						type='range'
						min='0'
						max='255'
						onChange={onBlueChange} />
					<label htmlFor='blue'>{blue}</label>
					<div
						style={{ background: formatRGB(red, green, blue) }}
						className='my-4 aspect-square w-60'
					/>
					<div>dec: <code>rgba({red}, {green}, {blue}, 1)</code></div>
					<div>hex: <code>{convertRGBToHex(red, green, blue)}</code></div>
				</div>
			</Container>
		</>
	)
}

