function Button(props) {
	return (
		<div className='container mx-auto '>
			<button className="w-full p-2 text-xl text-left border-2 border-gray-400 rounded hover:bg-slate-200" >
				{props.number} button
			</button>
		</div>
	)
}

export default function Home() {
	return (
		<div>
			<Button
				number={'First'} />
			<Button
				number={'Second'} />
			<Button
				number={'Third'} />
			<Button
				number={'Fourth'} />
			<Button
				number={'Fifth'} />
		</div>
	)
}
