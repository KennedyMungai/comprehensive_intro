import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    return (
		<nav className='bg-gray-800'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 items-center sm:hidden'>
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
