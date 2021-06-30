import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

// import { Container } from './styles';

const Banner: React.FC = () => {
  return (
    <Flex
      //bgImage={`url('/images/banner-background.jpg)`}
      bgImage="url('/images/banner-background.jpg')"
      bgSize="cover"
      width="100%"
      height={335}
    //mx="auto"
    >
      <Flex
        w="100%"
        maxWidth={1440}
        my={20}
        mx={40}
        justifyContent="space-between"
      >
        <Box
          maxW={524}
        >
          <Text
            color="white"
            fontFamily="heading"
            fontSize={36}
            fontWeight="500"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            color="white"
            fontFamily="heading"
            fontSize={20}
            fontWeight="400"
            my={5}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Box>
          <Image src="/images/banner-airplane.svg" />
        </Box>

      </Flex>
    </Flex >
  );
}

export default Banner;