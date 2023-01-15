import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'

export default function Form() {
	const [answer, setAnswer] = React.useState('');
	const [error, setError] = React.useState(null);
	const [status, setStatus] = React.useState('typing')

	async function handleSubmit(event) {
		event.preventDefault();
		setStatus('submitting');
		try {
			await submitForm(answer);
			setStatus('success');
		} catch (err) {
			setStatus('typing');
			setError(err);
		}
	}

	function handleInputChange(event) {
		setAnswer(event.target.value);
	}

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[300px]'>
					<h1 className='my-4 text-xl'>Formula one quiz</h1>
					<p>
						Type the current F1 Champion's name?
					</p>
					<form onSubmit={handleSubmit}>
						<input
							className='w-full p-2 border-2 rounded border-sky-600'
							value={answer}
							onChange={handleInputChange}
							disabled={status === 'submitting'}
						/>
						<SendButton
							disabled={!answer.length}>
							Submit
						</SendButton>
					</form>
				</div>
			</Container>
		</>
	)
}
