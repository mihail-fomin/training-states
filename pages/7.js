import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function () {
	const [length, setLength] = React.useState(6)
	const [value, setValue] = React.useState('')
	function onLengthChange(event) {
		setLength(event.target.value);
	}

	function onGenerateButtonClick(event) {
		event.preventDefault()
		let chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
		let str = ''
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
					max='20' />
				<label htmlFor='range'>{length}</label>
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