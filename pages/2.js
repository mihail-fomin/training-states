import * as React from "react"
import { MainMenu } from "../components/MainMenu"
import { twMerge } from "tailwind-merge"
import Container from "../components/Container"

function Item({ active, disabled, children, onClick }) {
	const commonCn = `cursor-pointer text-black w-full p-2 text-xl border-2 border-gray-400 hover:bg-gray-200 rounded`
	const activeCn = active ? `text-white bg-blue-600` : ``
	const disabledCn = disabled ? `bg-gray-200` : ``

	return (
		<div className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</div>
	)
}

function Carousel({ items }) {
	const [activeIndex, SetActiveIndex] = React.useState(0)

	let hasNext = activeIndex < items.length - 1
	let hasPrev = activeIndex > 0

	function handleNextClick() {
		if (hasNext) SetActiveIndex(activeIndex + 1)
	}
	function handlePrevClick() {
		if (hasPrev) SetActiveIndex(activeIndex - 1)
	}


	return (
		<div className="flex">
			<button
				className="p-2 mx-2 text-white rounded bg-sky-600"
				onClick={handlePrevClick}

			>
				Previous
			</button>
			{items.map((item, index) => {
				return <Item className='flex' active={activeIndex == index} onClick={() => SetActiveIndex(index)}>
					{item}
				</Item>
			})}
			<button
				className="p-2 mx-2 text-white rounded bg-sky-600"
				onClick={handleNextClick}
				disabled={!hasNext}
			>
				Next
			</button>
		</div>
	)
}


export default function Body() {
	return <div>
		<Container>
			<MainMenu />
			<div className="flex flex-row">
				<Carousel items={['1', '2', '3', '4', '5']} />
			</div>

		</Container>
	</div>
}