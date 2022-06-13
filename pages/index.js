
import Image from 'next/image'
import Property  from '../components/property'
import { Flex, Box, Text, Button} from '@chakra-ui/react'
import Loader from '../components/Loader'


import {baseUrl, fetchApi} from '../utils/fetchApi'

const Banner = ({img, purpose, title, button, desc}) =>(
  
  <>
    <Flex flexWrap='wrap' justifyContent ='center'  alignItems="center" m="10">
      <Box alignItems="center">
        <Image src={img} width={500} height={300} alt='property'/>
      </Box>
      <Box p={5}>
        <Text  fontSize='16px'>{purpose}</Text>
        <Text marginTop={2} fontSize="22px" fontWeight="bold" maxW="200px">{title}</Text>
        <Text maxW="320px" marginTop={2}>{desc}</Text>
        <Button marginTop={5}>{button}</Button>
      </Box>
  </Flex>
  
  </>
  
)

function Home({propertiesForRent, propertiesForSale}) {
   
   
   if(!propertiesForRent){
    return (
      <Loader/>
    )
   }
  return (
    <>
    <Banner
       purpose='RENT A HOME'
       title='Rental Homes for Everyone'
       desc =' Explore from Apartments, builder floors, villas and more'
       button='Explore Renting'
       //linkName='/search?purpose=for-rent'
       img='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    ></Banner>
    <Box>
       <Flex flexWrap="wrap" justifyContent ='center'>
           {propertiesForSale.map((property)=>{
             return <Property key={property.id} property={property}></Property>
          })}
      </Flex>
    </Box>
    <Banner
       purpose='Rent A HOME'
       title='Rental Homes for Everyone'
       desc =' Explore from Apartments, builder floors, villas and more'
       button='Explore Renting'
       //linkName='/search?purpose=for-rent'
       img='https://wp-tid.zillowstatic.com/trulia/wp-content/uploads/sites/1/2016/11/home-for-sale-in-middleton-id-111016-hero.jpg'
    ></Banner>
    <Box  className='box'>
       <Flex flexWrap="wrap" justifyContent ='center'>
           {propertiesForRent.map((property)=>{
             return <Property key={property.id} property={property}></Property>
          })}
      </Flex>
    </Box>
    </>
  )
}


export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  
return {

  props:{
    propertiesForSale: propertyForSale?.hits,
    propertiesForRent: propertyForRent?.hits,
    
  }
}
}


export default Home