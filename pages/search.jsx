import {useState, useEffect} from 'react' 
import { useRouter } from 'next/router'
import {Flex, Box, Text, Icon} from '@chakra-ui/react';
import {BsFilter} from 'react-icons/bs'
import { fetchApi } from '../utils/fetchApi';
import { baseUrl } from '../utils/fetchApi';
import Property from '../components/property';
import SearchItems from '../components/searchItems';
import Loader from '../components/Loader';

const Search = ({properties}) =>{
   
   console.log(properties.length)
    const [search, setSearch] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const displaySearch =()=>{
        setSearch(!search)
    }
    
    const query = router.query
    console.log(query,"query in search")
    useEffect(()=>{
      if (!search) {
        router.push('/search')
      }
      if(properties){
        setLoading(false)
      }
    },[search, properties])

    if(loading){
      return <Loader/>
    }
    
    return (<>
    <Box
      background='gray.200' 
      borderBottom='2px'
      borderColor='gray.300'
      transition='all 2s linear'
      >
     <Flex 
        alignItems='center' 
        justifyContent='center' 
        padding={1} 
        className='search_heading_container'
    >
        <Text className='search_heading' fontSize={16} fontWeight='bold'>Search Property By Filters</Text>
        <Icon fontSize={40} paddingLeft={2} cursor='pointer' color='royalblue' as={BsFilter} onClick={displaySearch}></Icon>
     </Flex>
     {search && <SearchItems />}
     </Box>
     <Text className='heading_text' fontSize={25} fontWeight="bold" m='10px 20px'>{query.purpose? `Properties for ${query.purpose}` : 'All Properties' }</Text>
     <Flex flexWrap="wrap" justifyContent ='center'>
           {properties.map((property)=>{
             return <Property property={property}></Property>
          })}
      </Flex>
    </>)
}
export async function getServerSideProps({query}){
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
    
  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
      
  
  return {
   
    props:{
      properties: data?.hits,}
  }
}

export default Search