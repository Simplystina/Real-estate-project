import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

/* headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '648b553f41mshb3f5b7fa67b55a7p10f172jsn47fc08d87214'
  }
  */

  export const fetchApi = async (url)=>{
      const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '648b553f41mshb3f5b7fa67b55a7p10f172jsn47fc08d87214'
          }
      })

      return data
  }