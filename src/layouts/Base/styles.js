import { chakra, Container, Box } from '@chakra-ui/react'

export const ContainerBase = chakra(Container, {
	base: {
		display: 'relative',
		background: '#F0F6F8',

		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100vh',
		width: '100%',
		maxWidth: '100%',
	},
})

export const Content = chakra(Box, {
	base: {
		display: 'flex', // This makes the sidebar and main content sit side-by-side
    maxWidth: '1300px',
    mx: 'auto',
	},
	lg: {
		display: 'grid',
		gridTemplateColumns: '300px auto',
		gridTempplateRows: 'auto',
		gridTemplateAreas: `'asidde .'`,
		maxWidth: '1300px',
		mx: 'auto',
	},
})

export const BoxAside = chakra(Box, {
	base: {
		background: 'unset',
		paddingBottom: 'unset',
		display: 'none',
	},
	lg: {
		gridArea: 'aside',
		display: 'flex',
	},
})

export const MainWrapper = chakra('main', {
	base: {
		mt: { base: 0, lg: 2 },
		p: { base: 0, lg: 4 },
		display: 'flex',
		flex: '1',
		overflow: 'hidden',
	},
})
