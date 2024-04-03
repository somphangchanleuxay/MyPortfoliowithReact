import { Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/images/78-781773_kawaii-cute-anime-stiker-kawaii-anime-png-transparent.png';
import { useEffect, useState } from 'react';

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

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        backgroundColor="teal.500"
        color="white"
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="999"
      >
        <Link as={RouterLink} to="/" style={linkStyles}> {/* Link to the home page */}
          <img src={logo} alt="Logo" height="70px" />
        </Link>
        <Flex as="ul" listStyleType="none" gap={4}>
          <Link as={RouterLink} to="/about" style={linkStyles}>About Me</Link> {/* Link to the About page */}
          <Link as={RouterLink} to="/portfolio" style={linkStyles}>Portfolio</Link> {/* Link to the Portfolio page */}
          <Link as={RouterLink} to="/contact" style={linkStyles}>Contact</Link> {/* Link to the Contact page */}
          <Link as={RouterLink} to="/resume" style={linkStyles}>Resume</Link> {/* Link to the Resume page */}
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;