import NavBar from '@/components/NavBar/NavBar'
import './globals.css'

export const metadata = {
	title: 'Comprehensive NextJS Intro',
	description: 'A comprehensive intro to NextJs'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	)
}
