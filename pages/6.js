import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function CollorChooser() {
	const [height, setHeight] = React.useState(180);
	const [weight, setweight] = React.useState(80);

	function onHeightChange(event) {
		setHeight(event.target.value);
		console.log(height);
	}
	function onWeightChange(event) {
		setweight(event.target.value);
		console.log(weight);
	}

	function calculateBMI(height, weight) {
		return weight / Math.pow(height, 2)
	}

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[240px]'>
					<h1 className='my-4 text-xl'>BMI Calculator</h1>
					<p>Height, cm</p>
					<input
						className='w-3/4 mr-4'
						value={height}
						name='height'
						type='range'
						min='0'
						max='200'
						onChange={onHeightChange} />
					<label for='height'>{height}</label>
					<p>Weight, kg</p>
					<input
						className='w-3/4 mr-4'
						value={weight}
						name='weight'
						type='range'
						min='0'
						max='180'
						onChange={onWeightChange} />
					<label for='weight'>{weight}</label>
					<div
					/>
					<div>BMI: {calculateBMI()} </div>
				</div>
			</Container>
		</>
	)
}

