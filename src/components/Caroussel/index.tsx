import { Box, Flex, Image, Text } from '@chakra-ui/react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import styles from "./caroussel.module.scss";

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


// import { Container } from './styles';

const Caroussel: React.FC = () => {

  return (
    <Box w="100%" maxW={1440} mx={80} my={20} height="535px">

      <Swiper
        spaceBetween={30}
        pagination={true}
        navigation={{
          nextEl: styles.swiperButtonNext,
          prevEl: styles.swiperButtonPrev
        }}
        className={styles.swiperContainer}

      >
        <SwiperSlide data-hash="north-america" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1485184616184-d4e53ab2c9a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&w=2158&q=80')"
            bgPosition="center"
            bgSize="cover"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>América do Norte</Text>
            <Text fontSize={24} fontWeight="bold">...</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide data-hash="south-america" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1548686013-c85877abc345?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>América do Sul</Text>
            <Text fontSize={24} fontWeight="bold">...</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide data-hash="asia" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1480796927426-f609979314bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>Ásia</Text>
            <Text fontSize={24} fontWeight="bold">O continente mais antigo</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide data-hash="africa" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80')"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>África</Text>
            <Text fontSize={24} fontWeight="bold">O continente mais antigo</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide data-hash="europe" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1482401204742-eb3c31c24722?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1412&q=80')"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>Europa</Text>
            <Text fontSize={24} fontWeight="bold">O continente mais antigo</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide data-hash="oceania" className={styles.swiperSlide}>
          <Flex
            bgImage="linear-gradient(rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)) , url('https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')"
            bgSize="cover"
            bgPosition="center"
            direction="column"
            alignItems="center"
            justifyContent="center"
            color="light.white"
          >
            <Text fontSize={48} fontWeight="bold" lineHeight={2}>Oceania</Text>
            <Text fontSize={24} fontWeight="bold">O continente mais antigo</Text>
          </Flex>
        </SwiperSlide>

        <div className={styles.swiperButtonPrev} />
        <div className={styles.swiperButtonNext} />
      </Swiper>

    </Box>
  )
}

export default Caroussel;