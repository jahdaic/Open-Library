import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../css/globals.css';

const cinzel = localFont({
	src: '../fonts/cinzel-decorative-black.woff',
	variable: '--cinzel-decorative-black',
	weight: 'black',
});

const baskerville = localFont({
	src: [
		{
			path: '../fonts/baskerville.ttf',
			weight: 'normal',
		},
		{
			path: '../fonts/baskerville-italic.ttf',
			weight: 'normal',
			style: 'italic',
		},
	],
	variable: '--baskerville',
});

const permanentMarker = localFont({
	src: '../fonts/permanent-marker.ttf',
	variable: '--permanent-marker',
	weight: 'normal',
});

export const metadata: Metadata = {
	title: 'Open Library',
	description: 'Freely read books',
};

export const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<html lang="en">
			<body className={`${cinzel.variable} ${baskerville.variable} ${permanentMarker.variable}`}>{children}</body>
		</html>
	);
};

export default RootLayout;
