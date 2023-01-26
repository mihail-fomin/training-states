import Link from "next/link"
import * as React from "react"
import { twMerge } from 'tailwind-merge'

function Item({ active, children, onClick }) {
	const commonCn = `px-2
		border
		text-black bg-gray-100
		`
	const activeCn = active ? `
		text-white bg-blue-600
		` : ``

	return (
		<Link className={twMerge(commonCn + activeCn)} onClick={onClick} >
			{children}
		</Link>
	)
}
function LinkList({ items }) {
	const [activeIndex, setactiveIndex] = React.useState(0)

	return (
		<div>
			{
				items.map((item, index) => {
					return <Item active={activeIndex == index} onClick={() => setactiveIndex(index)}>
						{item}
					</Item>
				})
			}
		</div>
	)
}

export function MainMenu() {

	return <div className="flex gap-3 mb-4">
		<Link className="px-2 text-white bg-blue-600" href='/'>1st exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/2'>2nd exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/3'>3rd exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/4'>4th exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/5'>5th exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/6'>6th exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/7'>7th exercise</Link>
	</div>
}