import PropTypes from 'prop-types'

import { Icon, Text, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MenuItem } from './styles'

const SidebarItem = ({ title, icon, to, selected } = {}) => (
	<Link to={to}>
		<MenuItem className={selected ? 'selected' : ''}>
			<Text className="icon" ml={6}>
				<Icon size={1} as={icon} />
			</Text>
			{title}
		</MenuItem>
	</Link>
)

SidebarItem.displayName = 'SidebarItem'
SidebarItem.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	to: PropTypes.string,
	selected: PropTypes.bool.isRequired,
}
SidebarItem.defaultProps = {
	to: '',
}

export default SidebarItem
