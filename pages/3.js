import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

const lettersMaxNum = 140;

export default function Form() {
	const [tweet, setTweet] = React.useState('');
	const [counter, setCounter] = React.useState(lettersMaxNum);


	function handleTextAreaChange(e) {
		setTweet(e.target.value);
		setCounter(n => n - 1)
	}

	function handleSubmit(e) {
		e.preventDefault();
		submitForm(tweet);
		return alert('Your tweet has been sent!')
	}

	return <div>
		<Container>
			<MainMenu />
			<div className='mx-auto w-[300px]'>
				<h1 className='my-4 text-xl'>Tweet</h1>
				<form onSubmit={handleSubmit}>
					<textarea
						className='w-full p-2 border-2 rounded h-36 border-sky-600'
						value={tweet}
						placeholder='Input up to 140 characters...'
						onChange={handleTextAreaChange}
					>
					</textarea>
					<div className='flex items-center justify-between'>
						<button
							className='block p-2 text-white rounded cursor-pointer bg-sky-600'
							disabled={tweet.length === 0}>
							Tweet
						</button>
						<div >{counter}</div>
					</div>
				</form>
			</div>
		</Container>
	</div>
}
