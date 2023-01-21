import * as React from "react"
import { MainMenu } from "../components/MainMenu"
import { twMerge } from "tailwind-merge"
import Container from "../components/Container"

function PaginationItem({ active, children, onClick }) {
	const commonCn = `
	cursor-pointer 
	rounded
	w-full h-12 aspect-square
	text-black text-xl
	border-2 border-gray-400 
	hover:bg-gray-100 
	`
	const activeCn = active ? `text-white bg-blue-600 hover:bg-blue-700` : ``

	return (
		<button className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</button>
	)
}

function PaginationButton({ disabled, children, onClick }) {
	const commonCn = `p-2 mx-2 text-white rounded bg-sky-600 cursor-pointer`
	const disabledCn = disabled ? `
	cursor-not-allowed
	bg-gray-100 text-gray-500 
	hover:bg-gray-100
	` : ``

	return (
		<button className={twMerge(commonCn + disabledCn)} onClick={onClick}>
			{children}
		</button>
	)
}

function Pagination({ items }) {
	const [activeIndex, setActiveIndex] = React.useState(0)

	let hasNext = activeIndex < items.length - 1
	let hasPrev = activeIndex > 0

	function handleNextClick() {
		if (hasNext) setActiveIndex(activeIndex + 1)
	}
	function handlePrevClick() {
		if (hasPrev) setActiveIndex(activeIndex - 1)
	}


	return (
		<div className="flex">
			<PaginationButton
				onClick={handlePrevClick}
				disabled={!hasPrev}
			>
				Previous
			</PaginationButton>
			{items.map((item, index) => {
				return <PaginationItem className='flex' active={activeIndex == index} onClick={() => setActiveIndex(index)}>
					{item}
				</PaginationItem>
			})}
			<PaginationButton
				onClick={handleNextClick}
				disabled={!hasNext}
			>
				Next
			</PaginationButton>
		</div>
	)
}


export default function Body() {
	return <div>
		<Container>
			<MainMenu />
			<div className="flex flex-row">
				<Pagination items={['1', '2', '3', '4', '5']} />
			</div>
		</Container>
	</div>
}