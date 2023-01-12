import Link from "next/link"
import * as React from "react"

export function MainMenu() {
	return <div className="flex gap-3 mb-4">
		<Link className="px-2 text-white bg-blue-600" href='/'>1st exercise</Link>
		<Link className="px-2 text-white bg-blue-600 " href='/2'>2nd exercise</Link>
		<Link className="px-2 text-white bg-blue-600" href='/3'>3rd exercise</Link>
	</div>
}