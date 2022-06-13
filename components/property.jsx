import Link from 'next/link'
import Image from 'next/Image'
import DefaultImage from '../assets/images/house.jpg'
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill} from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

const Property = ({property}) => {
    const {coverPhoto, price, rentFrequency, rooms, title, baths,
    area, agency, isVerified, externalID} = property
    return (
        <Link href={`/property/${externalID}`} passHref> 
            <Flex className='property_container' bg='whitesmoke' flexWrap='wrap' m='8px 10px' w="320px" p={3} paddingTop='10px' justifyContent='space-between' cursor='pointer' borderRadius='10px'>
                <Box>
                   <Image src={coverPhoto?.url || DefaultImage} width={400} height={300} alt="image"/>
                </Box>
                <Box  paddingTop={5} w='100%'>
                   <Flex paddingTop='2' alignItems='center' justifyContent='space-between' className='property_price'>
                       <Flex alignItems='center' >
                           <Box paddingRight='10px' color='green.500'>{isVerified && <GoVerified/>}</Box>
                           <Text  fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `${rentFrequency}`}</Text>
                       </Flex>
                       <Box>
                           <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                       </Box>
                   </Flex>
                   <Flex>
                       <Flex alignItems='center' p='1' justifyContent='space-between'  color='blue.400'>
                        {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill />
                        </Flex>
                   </Flex>
                   <Text fontSize='16px'>
                            {title.length >30 ?title.substring(0,30) + '...' :title}
                    </Text>
                </Box>
            </Flex>
        </Link>
    )
}

export default Property