import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export function Input(disabled) {
	const commonCn = `
		w-full p-2
	 	border-2 rounded border-gray-600
	 `
	const disabledCn = disabled ? `
		text-gray-500
	` : ``
	return (
		<input
			className={twMerge(commonCn + disabledCn)}
		/>
	)
}