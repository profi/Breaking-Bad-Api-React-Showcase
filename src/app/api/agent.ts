import axios, { AxiosResponse  } from "axios";
import { BreakingBadCharacter } from "../models/breakingbadcharacter";


const sleep = (delay: number)  => {
    return new Promise((resolve) => {
        setTimeout(resolve,delay)
    })
}

axios.defaults.baseURL = 'https://localhost:7210/api';

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
    return response;
    }catch(error){
        console.log(error);
        return await Promise.reject(error);
    }   
})


const responseBody = <T>(response : AxiosResponse<T>) => response.data;

const request = {
    get: <T>(url: string)  => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body : {})  => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body : {})  => axios.put<T>(url, body).then(responseBody),
    delete: <T>(url: string)  => axios.delete<T>(url).then(responseBody),
}

const BreakingBadCharacters = {
    list : () => request.get<BreakingBadCharacter[]>('/BreakingBad/getAllCharacters')
}

const agent = {
    BreakingBadCharacters
}

export default agent;