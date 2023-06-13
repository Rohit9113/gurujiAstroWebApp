import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Box, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';
import thumbnail1 from '../media/thumbnail/thumbnail1.jpg';
import thumbnail2 from '../media/thumbnail/thumbnail2.jpg';

function VideoCarousel() {
  const videos = [
    { id: 1, title: 'Space 1', thumbnail: thumbnail1, videoUrl: 'https://www.youtube.com/watch?v=6lbILtMLt9s' },
    { id: 2, title: 'Space 2', thumbnail: thumbnail2, videoUrl: 'https://www.youtube.com/watch?v=6lbILtMLt9s' },
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef(null);

  const nextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  };

  const selectVideo = (index) => {
    setCurrentVideo(index);
  };

  return (
    <div className="container video" style={{ background: 'white' }}>
      <h1 className="heading">User Testimonial</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        onSlideChange={(swiper) => setCurrentVideo(swiper.activeIndex)}
        className="swiper_container"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <Box
              position="fixed"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="100%"
              maxWidth="500px"
              height="auto"
              overflow="hidden"
              onClick={() => {
                isOpen ? onClose() : onOpen();
                selectVideo(index);
              }}
              cursor="pointer"
            >
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '56.25%',
                  height: 0,
                  overflow: 'hidden',
                  paddingTop: '30px',
                }}
              >
                <YouTube videoId={video.videoUrl.split('v=')[1]} opts={{ width: '100%', height: '100%', playerVars: { modestbranding: 1 } }} />
              </div>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Flex justify="center" mt="4">
        <IconButton
          aria-label="previous video"
          icon={<FaChevronLeft />}
          fontSize="30px"
          mr="2"
          onClick={prevVideo}
        />
        <IconButton
          aria-label="next video"
          icon={<FaChevronRight />}
          fontSize="30px"
          ml="2"
          onClick={nextVideo}
        />
      </Flex>
    </div>
  );
}

export default VideoCarousel;
