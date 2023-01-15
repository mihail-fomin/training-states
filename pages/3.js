import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function Form() {
	const [count, setCount] = React.useState(0);


	const recalculate = event => {
		event.target.value = event.target.value.slice(0, 140)
		setCount(event.target.value.length);
	};

	function handleSubmit(event) {
		event.preventDefault();
		return alert('Your tweet has been sent!')
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
						onChange={recalculate}
					>
					</textarea>
					<div className='flex items-center justify-between'>
						<button
							className='block p-2 text-white rounded cursor-pointer bg-sky-600'
							disabled={count.length === 0}>
							Tweet
						</button>
						<div >{140 - count}</div>
					</div>
				</form>
			</div>
		</Container>
	</div>
}
