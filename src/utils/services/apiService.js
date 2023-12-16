import { apiData } from "../app_constants/apiConstants"


const apiHeader = ()=>({
    
        'Accept':'application/json'
    
})

const buildQueryString = (params) => {
    const query = new URLSearchParams(params).toString();
    return query ? `?${query}` : '';
  };

const handleResponse = async(response)=>{
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error);
      }
      try {
        return await response.json();
      } catch (error) {
        return response;
      }
}


const apiService = {
    get: async(path,queryParams = {})=>{
        const queryString = buildQueryString(queryParams);
        console.log(`${apiData.baseUrl}${path}${queryString}`);
        const response = await fetch(`${apiData.baseUrl}${path}${queryString}`,
            {
                method:'GET',
                headers: apiHeader
            }
            );
            console.log(response);
            return handleResponse(response);
    }

}

export default apiService;