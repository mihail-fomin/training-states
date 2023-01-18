import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'

const questionList = [
	{ id: 0, question: 'Which year the first F1 race was held?', rightAnswer: '1950' },
	{ id: 1, question: 'What is the current F1 Champion\'s first name?', rightAnswer: 'Max' },
	{ id: 2, question: 'How many F1 drivers managed to become a world champoin for 7 times?', rightAnswer: '2' },
]

export default function Form() {
	const [answer, setAnswer] = React.useState('');
	const [error, setError] = React.useState(null);
	const [status, setStatus] = React.useState('typing')
	const [index, setIndex] = React.useState(0)


	let item = questionList[index];

	function submitForm(answer) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let shouldError = answer.toLowerCase() !== item.rightAnswer;
				console.log(item.rightAnswer);
				if (shouldError) {
					reject(new Error(`Good guess but wrong answer. Right answer - ${item.rightAnswer}`));
				} else {
					resolve();
				}
			}, 1500);
		})
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setStatus('submitting');
		setError(null)
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
			setError(err);
		}
	}

	function onChange(event) {
		setAnswer(event.target.value);
	}

	function handleNextClick() {
		setIndex(index + 1);
		setAnswer('')
	}

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[300px]'>
					<h1 className='my-4 text-xl'>Formula one quiz</h1>
					<p>{item.question}</p>
					<form onSubmit={handleSubmit}>
						<input
							className='w-full p-2 border-2 rounded border-sky-600'
							value={answer}
							onChange={onChange}
							disabled={status === 'submitting'}
						/>
						<SendButton disabled={!answer.length ||
							status === 'submitting'
						}>
							Submit
						</SendButton>
						{error !== null &&
							<p className="text-xl text-red-600">
								{error.message}
							</p>
						}
						{status === 'success' &&
							<p className='text-xl text-green-700'>
								Nice one!
							</p>
						}
						<button
							className='inline-block p-2 m-2 text-white rounded cursor-pointer bg-sky-600 hover:bg-sky-700'
							onClick={handleNextClick}>
							Next question
						</button>

					</form>
				</div>
			</Container>
		</>
	)
}

