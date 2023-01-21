import * as React from 'react'
import { MainMenu } from '../components/MainMenu'
import Container from '../components/Container'

export default function CollorChooser() {

	return (
		<>
			<Container>
				<MainMenu />
				<div className='mx-auto w-[300px]'>
					<h1 className='my-4 text-xl'>Color chooser</h1>
				</div>
			</Container>
		</>
	)
}

