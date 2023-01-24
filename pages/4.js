import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'

const questionList = [
	{ id: 0, question: 'Which year the first F1 race was held?', rightAnswer: '1950' },
	{ id: 1, question: 'What is the current F1 Champion\'s first name?', rightAnswer: 'Max' },
	{ id: 2, question: 'How many F1 drivers managed to become a world champoin for 7 times?', rightAnswer: '2' },
]

async function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, ms);
	})
}


export default function Form() {
	const [answer, setAnswer] = React.useState('');
	const [error, setError] = React.useState('');
	const [status, setStatus] = React.useState('typing')
	const [index, setIndex] = React.useState(0)


	let item = questionList[index];

	function validate(answer) {
		return answer.toLowerCase() === item.rightAnswer.toLowerCase()
	}

	function onInputChange(event) {
		setAnswer(event.target.value);
	}

	async function onSubmitButtonClick() {
		setError('')
		setStatus('loading');
		await sleep(1500)
		if (validate(answer)) {
			setStatus('success');
		} else {
			setError('Good guess but wrong answer')
			setStatus('typing')
		}
	}

	function onNextButtonClick() {
		setIndex(index + 1);
		setAnswer('')
		setError('')
		setStatus('typing')
	}

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[300px]'>
					<h1 className='my-4 text-xl'>Formula one quiz</h1>
					<p>{item.question}</p>
					<form>
						<input
							className='w-full p-2 border-2 rounded border-sky-600'
							value={answer}
							onChange={onInputChange}
							disabled={status === 'loading'}
						/>
						<SendButton
							disabled={!answer.length || status === 'loading'}
							onClick={status === 'success' ? onNextButtonClick : onSubmitButtonClick}>
							{status === 'success' ? 'Next question' :
								status === 'loading' ? 'Loading...' :
									'Submit'}
						</SendButton>
						{status === 'success' &&
							<p className='text-xl text-green-700'>
								Nice one!
							</p>
						}
						{error !== null &&
							<p className="text-xl text-red-600">
								{error}
							</p>
						}
					</form>
				</div>
			</Container>
		</>
	)
}

