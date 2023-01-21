import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'


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

	if (input.length) {
		return <div>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[300px]'>
					<h1 className='my-4 text-xl'>Tweet</h1>
					<form onSubmit={handleSubmit}>
						<textarea
							className='w-full p-2 border-2 rounded border-sky-600'
							rows={5}
							placeholder='Input up to 140 characters...'
							onChange={onChange}
							value={input}
						>
						</textarea>
						<div className='flex items-center justify-between'>
							<SendButton
								disabled={!input.length}
							>
								Tweet
							</SendButton>
							<div>{140 - input.length}</div>
						</div>
					</form>
				</div>
			</Container>
		</div>
	}

	return <div>
		<Container>
			<MainMenu />
			<div className='mx-auto w-[300px]'>
				<h1 className='my-4 text-xl'>Tweet</h1>
				<form onSubmit={handleSubmit}>
					<textarea
						className='w-full p-2 border-2 rounded border-sky-600'
						rows={5}
						placeholder='Input up to 140 characters...'
						onChange={onChange}
					>
					</textarea>
					<div className='flex items-center justify-between'>
						<SendButton
							disabled={true}
						>
							Tweet
						</SendButton>
						<div>{140 - input.length}</div>
					</div>
				</form>
			</div>
		</Container>
	</div>

}