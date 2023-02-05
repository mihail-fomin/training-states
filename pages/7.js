import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function App() {
	const [value, setValue] = React.useState('')
	const [withLength, setWithLength] = React.useState(6)
	const [withLowercase, setWithLowercase] = React.useState(false)
	const [withUppercase, setWithUppercase] = React.useState(false)
	const [withSymbol, setWithSymbol] = React.useState(false)

	function Checkbox({ name, label, onChange, checked }) {
		return <div className='my-2'>
			<input type='checkbox' name={name} checked={checked} onChange={onChange} />
			<label className='mx-2'>{label}</label>
		</div>
	}

	function onLengthChange(event) {
		setWithLength(event.target.value);
	}

	function onLowercaseChange() {
		setWithLowercase(!withLowercase)
	}

	function onUppercaseChange() {
		setWithUppercase(!withUppercase)
	}

	function onSymbolChange() {
		setWithSymbol(!withSymbol)
	}

	function onGenerateButtonClick(event) {
		event.preventDefault()
		let str = ''
		let chrs = '0123456789'
		let lwrcase = 'abdehkmnpswxz'
		let upprcase = 'ABDEFGHKMNPQRSTWX'
		let symbols = '-_/'

		if (withLowercase) chrs += lwrcase
		if (withUppercase) chrs += upprcase
		if (withSymbol) chrs += symbols



		for (let i = 0; i < withLength; i++) {
			let pos = Math.floor(Math.random() * chrs.length);
			str += chrs.substring(pos, pos + 1)
		}
		setValue(str)
	}

	function onClipboardCopyClick() {
		navigator.clipboard.writeText(value)
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
					value={withLength}
					name='range'
					type='range'
					min='6'
					onChange={onLengthChange}
					max='12' />
				<label htmlFor='range'>{withLength}</label>
				<div className='my-2'>
					<input type='checkbox' name='numbers' checked={true} />
					<label className='mx-2'>Numbers (always enabled)</label>
				</div>
				<Checkbox
					name='withLowercase'
					checked={withLowercase}
					onChange={onLowercaseChange}
					label='Lowercase'
				/>
				<Checkbox
					name='withUppercase'
					checked={withUppercase}
					onChange={onUppercaseChange}
					label='Uppercase'
				/>

				<Checkbox
					name='withSymbol'
					checked={withSymbol}
					onChange={onSymbolChange}
					label='Symbols'
				/>

				<button
					className='block p-2 my-2 text-white rounded cursor-pointer bg-sky-600 hover:bg-sky-700'
					onClick={onGenerateButtonClick}
				>
					Generate
				</button>
				<button
					className='block p-2 my-2 text-white rounded cursor-pointer bg-sky-600 hover:bg-sky-700'
					onClick={onClipboardCopyClick}
				>Copy to clipboard</button>
			</div>
		</Container>
	</>
}