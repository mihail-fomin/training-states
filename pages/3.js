import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'
import { SendButton } from '../components/SendButton'


function TextArea(props) {
	// `props.value` toggles between "controlled" / "uncontrolled" modes
	const {
		// defaultValue,
		className,
		onChange,
		rows,
		placeholder,
		value,
	} = props


	// const [value, setValue] = React.useState(defaultValue)

	return (
		<textarea
			className={className}
			onChange={(event) => onChange(event.target.value, event)}
			placeholder={placeholder}
			rows={rows}
			value={value}
		/>
	)
}

export default function Form() {
	const [input, setInput] = React.useState("");

	function onChange(value, _event) {
		setInput(value.slice(0, 140))
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
					<TextArea
						className='w-full p-2 border-2 rounded border-sky-600 focus:outline-none focus:ring focus:border-blue-500'
						onChange={onChange}
						placeholder='Input up to 140 characters...'
						rows={5}
						value={input}
					>
					</TextArea>
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