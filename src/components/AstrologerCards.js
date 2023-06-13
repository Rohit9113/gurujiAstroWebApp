import React from 'react'
import Card from './Card'
import { useMediaQuery, Grid, Box, GridItem, Center, useBreakpointValue } from '@chakra-ui/react';


const astrologers = [
  {
    id: 1,
    name: 'Jay Kumar',
    specialty: 'Relationships',
    price: 50,
    rating: 4.5,
    profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 2,
    name: 'Deep Khalkho',
    specialty: 'Career',
    price: 75,
    rating: 4.2,
    profileImg: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 3,
    name: 'Rohit Lohra',
    specialty: 'Finance',
    price: 100,
    rating: 4.7,
    profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 4,
    name: 'Vivek kumar',
    specialty: 'Relationships',
    price: 50,
    rating: 4.5,
    profileImg: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 5,
    name: 'Abhishek Kumar',
    specialty: 'Career',
    price: 75,
    rating: 4.2,
    profileImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 6,
    name: 'Nidhish Gupta',
    specialty: 'Finance',
    price: 100,
    rating: 4.7,
    profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 7,
    name: 'Rahul Roy',
    specialty: 'Relationships',
    price: 50,
    rating: 4.5,
    profileImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 8,
    name: 'Ayush Kumar',
    specialty: 'Career',
    price: 75,
    rating: 4.2,
    profileImg: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
  {
    id: 9,
    name: 'Bobby Kumar',
    specialty: 'Finance',
    price: 100,
    rating: 4.7,
    profileImg: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYXxlbnwwfHwwfHw%3D&w=1000&q=80',
    bio: 'This is just sample bio. maybe we can have more info here ',
  },
];

const AstrologerCards = () => {
  const [isLargerThan1080] = useMediaQuery('(min-width: 1200px)');
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');

  let columns = astrologers.length;
  if (isLargerThan1080) {
    columns = 3;
  } else if (isLargerThan700) {
    columns = 2;
  }
  return (
    <>
      <div style={{ borderRadius: "10px", overflow: "hidden" }}>
        <h1 className="heading">Premium Astrologers</h1>
        <div className="card-container">
          <Grid
            templateColumns={`repeat(${columns}, 1fr)`}
            gap={{ base: 4, md: 6 }}
            mx={{ base: '10%', md: 'auto' }}
            maxW="1200px"

          >
            {astrologers.map((astrologer) => (
              <div style={{ borderTopLeftRadius: "10px" , overflow: "hidden", marginLeft:"70px"}}>
              <GridItem key={astrologer.id}>
                <Card astrologer={astrologer} />
              </GridItem>
              </div>
            ))}
          </Grid>
        </div>
      </div>


    </>
  );
};

export default AstrologerCards;