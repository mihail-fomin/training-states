import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { twMerge } from 'tailwind-merge'

const commonCn = `
p-2 m-2
rounded-xl
text-center
`

function calculateBMI(heightM, weightKg) {
	return weightKg / heightM ** 2
}

function renderBMI(heightCm, weightKg) {
	return calculateBMI(heightCm / 100, weightKg).toFixed(1)
}

function tellBMI(bmi) {
	return bmi <= 18.5 ? 'Underweight' :
		bmi <= 24.9 ? 'Normal weight' :
			bmi <= 29.9 ? 'Overweight' :
				'Obese'
}

function tellBMIColor(bmi) {
	return bmi <= 18.5 ? 'bg-orange-500' :
		bmi <= 24.9 ? 'bg-green-600 text-white' :
			bmi <= 29.9 ? 'bg-orange-500' :
				'bg-red-600 text-white'
}


export default function App() {
	const [height, setHeight] = React.useState(180);
	const [weight, setweight] = React.useState(80);

	let bmi = renderBMI(height, weight)

	function onHeightChange(event) {
		setHeight(event.target.value);
	}
	function onWeightChange(event) {
		setweight(event.target.value);
	}



	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[240px]'>
					< h1 className='my-4 text-xl' > BMI Calculator</h1 >
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
					<div>BMI: <strong>{bmi}</strong> </div>
					<div className={twMerge(commonCn + tellBMIColor(bmi))}>
						{tellBMI(bmi)}
					</div>
				</div>
			</Container>
		</>
	)
}

