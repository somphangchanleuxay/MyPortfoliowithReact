import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; 
import logo from '../assets/images/tenor.gif';

function Navbar() {
  const linkStyles = {
    textDecoration: 'none',
    letterSpacing: '0px', 
    fontFamily: 'Syncopate, sans-serif', 
    fontWeight: 'bold', 
    fontSize: '1.2rem', 
    marginRight: '20px', 
    color: '#fff',
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="linear-gradient(45deg, #00FF00, #0000FF, #FF69B4)" 
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      width="100%"
      flexDirection="row" // Default direction is row
      flexWrap="wrap" // Allow items to wrap to the next line if necessary
    >
      <Link as={RouterLink} to="/" style={linkStyles}>
        <img src={logo} alt="Logo" height="100px" />
      </Link>
      <Flex as="ul" listStyleType="none" gap={4}>
        <Link as={RouterLink} to="/about" style={linkStyles}>About Me</Link>
        <Link as={RouterLink} to="/portfolio" style={linkStyles}>Portfolio</Link>
        <Link as={RouterLink} to="/contact" style={linkStyles}>Contact</Link>
        <Link as={RouterLink} to="/resume" style={linkStyles}>Resume</Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;