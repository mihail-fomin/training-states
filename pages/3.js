import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'


function TextArea({ value, defaultValue, onChange }) {
	const [_value, setValue] = React.useState(defaultValue)

	if (_value) {
		<textarea
			value={_value}
			onChange={(event) => {
				setValue(event.target.value)
			}}
		/>
	} else {

	}
	return
}

export default function Form() {
	const [input, setInput] = React.useState("");

	function onChange(event) {
		setInput(event.target.value.slice(0, 140))
	};

	function handleSubmit(event) {
		event.preventDefault();
		if (input.length) alert('Your tweet has been sent!')
		setInput('')
	}


	return <>
		<Container>
			<MainMenu />
			<div className='mx-auto w-[300px]'>
				<h1 className='my-4 text-xl'>Tweet</h1>
				<form>
					<textarea
						className='w-full p-2 border-2 rounded border-sky-600 focus:outline-none focus:ring focus:border-blue-500'
						rows={5}
						placeholder='Input up to 140 characters...'
						onChange={onChange}
						value={input}
					>
					</textarea>
					<div className='flex items-center justify-between'>
						<SendButton
							disabled={!input.length}
							onClick={handleSubmit}
						>
							Tweet
						</SendButton>
						<div>{140 - input.length}</div>
					</div>
				</form>
			</div>
		</Container>
	</>
}