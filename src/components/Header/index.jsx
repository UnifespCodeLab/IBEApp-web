import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'

import { Box, Flex, Heading, Container, Icon } from '@chakra-ui/react'
import { MdMenu, MdClose } from 'react-icons/md'

import { WrapperHeader, NavFlex, MenuIconButton } from './styles'
import { AppNameLogo } from '../../utils/theme/ComponentsTheme/AppName'

// const Header = ({ open, onMenu } = {}) => {
const Header = () => {
	// return (
	// 	<>
	// 		<WrapperHeader>
	// 			<Container maxW="container.xl" px={{ base: 6, lg: 4 }} py={4}>
	// 				<NavFlex>
	// 					<AppNameLogo>IBEApp</AppNameLogo>

	// 					<Box display={{ base: 'block', lg: 'none' }}>
	// 						<MenuIconButton
	// 							onClick={onMenu}
	// 							icon={<Icon fontSize="2xl" as={open ? MdClose : MdMenu} />}
	// 						/>
	// 					</Box>
	// 				</NavFlex>
	// 			</Container>
	// 		</WrapperHeader>
	// 	</>
	// )

	return (
		<Box
			as="header"
			bg="white"
			color="primary.600"
			boxShadow="md"
			position="fixed"
			top="0"
			width="100%"
			zIndex="2"
		>
			<Container maxW="container.xl" px={4} py={4}>
				<Flex
					direction="row"
					alignItems="center"
					justifyContent="space-between"
					flexWrap="wrap"
				>
					<AppNameLogo as={RouterLink} to="/home">
						IBEApp
					</AppNameLogo>

					{/* <Box display={{ base: 'block', lg: 'none' }}>
						<MenuIconButton
							onClick={onMenu}
							icon={<Icon fontSize="2xl" as={open ? MdClose : MdMenu} />}
						/>
					</Box> */}
				</Flex>
			</Container>
		</Box>
	)
}

Header.displayName = 'Header'
Header.propTypes = {
	open: PropTypes.bool,
	onMenu: PropTypes.func,
}
Header.defaultProps = {
	open: false,
	onMenu: undefined,
}

export default Header
