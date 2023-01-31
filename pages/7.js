import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function App() {
	const [value, setValue] = React.useState('')
	const [length, setLength] = React.useState(6)
	const [lowercase, setLowercase] = React.useState(false)
	const [uppercase, setUppercase] = React.useState(false)
	const [symbol, setSymbol] = React.useState(false)


	function onLengthChange(event) {
		setLength(event.target.value);
	}

	function onGenerateButtonClick(event) {
		event.preventDefault()
		let str = ''
		let chrs = '0123456789'
		let lwrcase = 'abdehkmnpswxz'
		let upprcase = 'ABDEFGHKMNPQRSTWX'
		let symbols = '-_/'

		if (lowercase) chrs += lwrcase
		if (uppercase) chrs += upprcase
		if (symbol) chrs += symbols



		for (let i = 0; i < length; i++) {
			let pos = Math.floor(Math.random() * chrs.length);
			str += chrs.substring(pos, pos + 1)
		}
		setValue(str)
	}

	return <>
		<Container>
			<MainMenu />
			<div className='mx-auto w-[300px]'>
				<p className='my-4 text-xl'>Generate a secure password</p>
				<input
					className='w-full p-2 mb-4 border-2 rounded border-sky-600'
					value={value}
					type='text'
					disabled
				/>
				<input
					className='w-1/2 mr-4'
					value={length}
					name='range'
					type='range'
					min='6'
					onChange={onLengthChange}
					max='12' />
				<label htmlFor='range'>{length}</label>
				<div className='mt-3'>
					<input type='checkbox' name='numbers' checked={true} />
					<label className='mx-2'>Numbers (always enabled)</label>
				</div>
				<div className='my-2'>
					<input type='checkbox' name='lowercase' onChange={() => setLowercase(!lowercase)} />
					<label className='mx-2'>Lowercase</label>
				</div>
				<div className='my-2'>
					<input type='checkbox' name='uppercase' onChange={() => setUppercase(!uppercase)} />
					<label className='mx-2'>Uppercase</label>
				</div>
				<div className='my-2'>
					<input type='checkbox' name='symbols' onChange={() => setSymbol(!symbol)} />
					<label className='mx-2'>Symbols</label>
				</div>

				<button
					className='block p-2 my-2 text-white rounded cursor-pointer bg-sky-600 hover:bg-sky-700'
					onClick={onGenerateButtonClick}
				>
					Generate
				</button>
			</div>
		</Container>
	</>
}