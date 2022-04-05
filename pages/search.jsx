import {useState} from 'react' 
import { useRouter } from 'next/router'
import Image from 'next/image'
import {Flex, Box, Text, Icon} from '@chakra-ui/react';
import {BsFilter} from 'react-icons/bs'
import { fetchApi } from '../utils/fetchApi';
import { baseUrl } from '../utils/fetchApi';
import Property from '../components/property';
import SearchItems from '../components/searchItems';

const Search = ({properties}) =>{
   
   console.log(properties.length)
    const [search, setSearch] = useState(false)
    const router = useRouter()
    const displaySearch =()=>{
        setSearch(!search)
    }
    
    const query = router.query
    
    return (<>
    <Box
      background='gray.200' 
      borderBottom='2px'
      borderColor='gray.300'

      >
     <Flex 
        alignItems='center' 
        justifyContent='center' 
        padding={1} 
    >
        <Text fontSize={16} fontWeight='bold'>Search Property By Filters</Text>
        <Icon fontSize={40} paddingLeft={2} cursor='pointer' as={BsFilter} onClick={displaySearch}></Icon>
     </Flex>
     {search && <SearchItems />}
     </Box>
     <Text fontSize={25} fontWeight="bold" m='10px 20px'>Properties for {query.purpose} </Text>
     <Flex flexWrap="wrap" justifyContent ='center'>
           {properties.map((property)=>{
             return <Property property={property}></Property>
          })}
      </Flex>
    </>)
}
export async function getServerSideProps({query}){
    const purpose = query.purpose || 'for-sale';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.ardata
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    
    let dataurl = `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}`
    
    for (const [key, value] of Object.entries(query)) {
        let pairs = `&${key}=${value}`
        dataurl +=pairs
      }
      const data = await fetchApi(dataurl)
    

  
  return {
   
    props:{
      properties: data?.hits,
     
    }
  }
  }

export default Search