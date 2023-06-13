import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateImage = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateContent = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  animation: ${rotateImage} 24s linear infinite;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size * 0.5}px;
  height: ${props => props.size * 0.5}px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 50%;
  font-size: ${props => props.size * 0.15}px;
  animation: ${rotateContent} 24s linear infinite;
`;

const CircularImageWithContent = ({image, size, backgroundColor, color, content}) => {
  return (
    <Circle image={image} size={size}>
      <Content size={size} backgroundColor={backgroundColor} color={color}>
        {content}
      </Content>
    </Circle>
  );
};

export default CircularImageWithContent;
