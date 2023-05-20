import Link from 'next/link'

export default function Home() {
	return (
		<div className='flex flex-col justify-center items-center h-full w-screen p-5 gap-3'>
			Hello
			<button className='p-5 bg-orange-500 rounded-lg'>
				<Link href={'/about'}>Go to the About Page</Link>
			</button>
		</div>
	)
}
