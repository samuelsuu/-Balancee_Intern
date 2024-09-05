import React from 'react';
import { Image } from '@chakra-ui/react';
import logoImg from '../assets/bc.png'; // Path to your logo image

const Logo = () => {
  return <Image src={logoImg} alt="App Logo"  boxSize="150px" // Adjust size as needed
  objectFit="contain" />;
};

export default Logo;
