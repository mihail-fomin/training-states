import Link from "next/link"
import * as React from "react"

export function MainMenu() {
	return <div className="flex gap-3 mb-4">
		<Link className="text-white bg-blue-600 " href='/'>1st exercise</Link>
		<Link className="text-white bg-blue-600 " href='/2'>2nd exercise</Link>
	</div>
}