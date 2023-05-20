import Link from 'next/link'

type Props = {}

const About = (props: Props) => {
	return (
		<>
			<div>About</div>
			<button className='bg-orange-500 rounded-md p-2 m-2'>
				<Link href='/'>Go To Home Page</Link>
			</button>
		</>
	)
}

export default About
