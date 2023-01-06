import * as React from "react"
import { twMerge } from "tailwind-merge"
import { MainMenu } from "../components/MainMenu"
import Container from "../components/Container"



function Item({ active, children, onClick }) {
	const commonCn = `flex inline-center cursor-pointer text-black justify-center w-full p-2 text-xl text-left border-2 border-gray-400 rounded`
	const activeCn = active ? `text-white bg-blue-600` : ``

	return (
		<div className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</div>
	)
}

function Accordion({ items }) {

	const [activeIndex, setactiveIndex] = React.useState(0)

	return (
		<div>
			{
				items.map((item, i) => {
					return <Item active={activeIndex == i} onClick={() => setactiveIndex(i)}>
						{item}
					</Item>
				})
			}
		</div>
	)
}

export default function Body() {
	return <div>
		<Container>
			<MainMenu />
			<Accordion items={["First", "Second", "Third"]} />
			<Accordion items={["A", "B", "C", "D"]} />
		</Container>
	</div>
}