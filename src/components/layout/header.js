import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header style={headerStyle}>
			<h1 style={h1Style}>Todo List</h1>
			<Link to = "/" style={linkStyle}> Home </Link> |
			<Link to = "/about" style={linkStyle}> About </Link>
		</header>
	)
}

const headerStyle = {
	textAlign: 'center',
	background: '#282c34',
	color: '#fff',
	paddingTop: '15px',
	paddingBottom: '15px',
	borderBottom: '1px solid #fff',
}

const h1Style = {
	margin: '0px'
}

const linkStyle = {
	textDecoration: 'none',
	color: '#fff'
}

export default Header;