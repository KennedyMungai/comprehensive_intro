import React, { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const AboutLayout = ({ children }: Props) => {
	return (
		<>
			<nav>About NavBar</nav>
			<main>{children}</main>
		</>
	)
}

export default AboutLayout
