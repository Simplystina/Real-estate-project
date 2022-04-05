import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterdata';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';

const SearchItems = ()=>{
    const router = useRouter()
    const [parameters, setParameters] = useState({})

    const showValue = (e,placeholder)=>{
        if(e.currentTarget.value){
            setParameters({...parameters, [placeholder]:e.currentTarget.value})
        }
        
       
    }
    //console.log("Parameters outside useEffect",parameters)
    useEffect(()=>{
        let queryupdate = router.query
        console.log(queryupdate)
        queryupdate = {...queryupdate,...parameters}
        router.push({pathname:'/search', query:queryupdate})
    },[parameters])
    return (
        <>
        <Flex justifyContent='center' flexWrap='wrap'>
            {filterData.map((item)=>{
                return (
                    <Box key={item.queryName} m={3}>
                        <Select placeholder={item.placeholder} onChange={(e)=>showValue(e,item.queryName)}>
                            {item?.items.map((label)=>
                               <option value={label.value} key={label.value}>{label.name}</option>
                            )}
                        </Select>
                    </Box>
                )
            })}
        </Flex>
        </>
    )
}

export default SearchItems