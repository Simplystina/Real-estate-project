import { useEffect, useState } from 'react';
import { Flex, Select, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';


import { filterData } from '../utils/filterdata';


const SearchItems = ()=>{
    const router = useRouter()
    const [parameters, setParameters] = useState({})

    const showValue = (e,placeholder)=>{
        if(e.currentTarget.value){
            setParameters({...parameters, [placeholder]:e.currentTarget.value})
        }
        
       
    }
    
    useEffect(()=>{
        let queryupdate = router.query
        queryupdate = {...queryupdate,...parameters}
        router.push({pathname:'/search', query:queryupdate})
        console.log(queryupdate)
    },[parameters])
    return (
        <>
        <Flex justifyContent='center' flexWrap='wrap' w='100%'>
            {filterData.map((item)=>{
                return (
                    <Box  bg='red' key={item.queryName} m={2}>
                        <Select placeholder={item.placeholder} onChange={(e)=>showValue(e, item.queryName)}>
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