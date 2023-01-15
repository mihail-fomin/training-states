import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { twMerge } from "tailwind-merge"


function SendButton(disabled) {
	const commonCn = `inline-block p-2 text-white rounded cursor-pointer bg-sky-600`
	const disabledCn = disabled ? `cursor-not-allowed bg-gray-100 text-gray-500` : ``

	return (
		<button className={twMerge(commonCn + disabledCn)} >
			Tweet
		</button>
	)
}

export default function Form() {
	const [input, setInput] = React.useState("");

	function onChange(event) {
		setInput(event.target.value.slice(0, 140))
	};

	function handleSubmit(event) {
		event.preventDefault();
		alert('Your tweet has been sent!')
	}

	return <div>
		<Container>
			<MainMenu />
			<div className='mx-auto w-[300px]'>
				<h1 className='my-4 text-xl'>Tweet</h1>
				<form onSubmit={handleSubmit}>
					<textarea
						className='w-full p-2 border-2 rounded border-sky-600'
						type='text'
						rows={5}
						placeholder='Input up to 140 characters...'
						onChange={onChange}
						value={input}
					>
					</textarea>
					<div className='flex items-center justify-between'>
						<SendButton
							disabled={!input.length}
						/>
						<div>{140 - input.length}</div>
					</div>
				</form>
			</div>
		</Container>
	</div>
}