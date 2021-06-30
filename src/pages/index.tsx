import { Box, Divider, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Header from '../components/Header'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';
import Caroussel from '../components/Caroussel';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Home() {



  return (
    <>
      <Header />
      <Banner />
      <Flex
        color="dark.black"
        py={20}
        direction="column"
        alignItems="center"
        mx={40}
      >
        <HStack
          width="100%"
          maxW={1440}

          spacing={4}
          justifyContent="space-between"
        >
          <VStack spacing={6}>
            <Image src="/images/icons/cocktail.svg" />
            <Text color="dark.black">vida Noturna</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src="/images/icons/surf.svg" />
            <Text color="dark.black">praia</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src="/images/icons/building.svg" />
            <Text color="dark.black">moderno</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src="/images/icons/museum.svg" />
            <Text color="dark.black">clássico</Text>
          </VStack>
          <VStack spacing={6}>
            <Image src="/images/icons/earth.svg" />
            <Text color="dark.black">e mais...</Text>
          </VStack>
        </HStack>

        <Box w="100%" maxW="100" color="black" borderBottom="2px" mt={20} mb={12} />

        <Text textAlign="center" fontSize="36">
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Caroussel />


      </Flex>
    </>
  )
}
