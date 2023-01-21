import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function CollorChooser() {
	const [red, setRed] = React.useState(120);
	const [green, setgreen] = React.useState(160);
	const [blue, setblue] = React.useState(100);

	function onRedChange(event) {
		setRed(event.target.value);
	}
	function onGreenChange(event) {
		setgreen(event.target.value);
	}
	function onBlueChange(event) {
		setblue(event.target.value);
	}

	function formatRGB(red, green, blue) {
		return `rgba(${red},${green},${blue}, 1)`
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
						name='red'
						type='range'
						min='0'
						max='255'
						onChange={onRedChange} />
					<label for='red'>{red}</label>
					<p>G</p>
					<input
						className='w-3/4 mr-4'
						name='green'
						type='range'
						min='0'
						max='255'
						onChange={onGreenChange} />
					<label for='blue'>{green}</label>
					<p>B</p>
					<input
						className='w-3/4 mr-4'
						name='blue'
						type='range'
						min='0'
						max='255'
						onChange={onBlueChange} />
					<label for='blue'>{blue}</label>
				</div>
				<div
					style={{ background: formatRGB(red, green, blue) }}
					className='mx-auto my-4 aspect-square w-60'
				>

				</div>
			</Container>
		</>
	)
}

