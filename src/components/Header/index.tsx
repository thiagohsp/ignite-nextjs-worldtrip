import { Flex } from '@chakra-ui/react';
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h="24"
      mx="auto"
      px="6"
      align="center"
      alignItems="center"
      justifyContent="center"
    >
      <Logo />
    </Flex>
  )
}

export default Header;