import * as React from "react"
import { MainMenu } from "../components/MainMenu"
import { twMerge } from "tailwind-merge"


function Container({ children }) {
	return (
		<div className='container mx-auto'>
			{children}
		</div>
	)
}

function Item({ active, children, onClick }) {
	const commonCn = `cursor-pointer text-black w-full p-2 text-xl border-2 border-gray-400 hover:bg-gray-200 rounded`
	const activeCn = active ? `text-white bg-blue-600` : ``

	return (
		<div className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</div>
	)
}



function Carousel({ items }) {
	const [activeIndex, SetActiveIndex] = React.useState(0)
	const [index, setIndex] = React.useState(0)

	function PrevButton() {
		setIndex(index - 1);
	}
	function NextButton() {
		setIndex(index + 1);
	}
	return (
		<div className="flex">
			{items.map((item, index) => {
				return <Item className='flex' active={activeIndex == index} onClick={() => SetActiveIndex(index)}>
					{item}
				</Item>
			})}
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