import { api } from './api'

export const AddFev = async({token, id}) => {
  try{
      const response = await api('favorites', {
        method:'Post',
        headers:{
          Authorization: `Bearer ${token}`,
        },
        body:{
          "recipe_id": id,
        }
      })

    return response
  }catch(e){
    console.log(e.message)
  }
}


export const isFav = async({token, id}) => {
  try{
    const response = await api(`favorites/check/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })

    return response.is_favorited
  }catch(e){
    console.log(e.message)
  }
}


export const DelFev = async ({token, id}) =>{
  try{
    const response = await api(`favorites/${id}`, {
      method: "Delete",
      headers:{
        Authorization: `Bearer ${token}`,
      }  
    });

    return response
  }catch(e){
    console.log("Failed Delete",e.message)
  }
}


export const getAllFev = async (token) =>{
  try{
    const response= api('favorites', {
      headers:{
        Authorization: `Bearer ${token}`,
      }
    }) 
    // console.log(response)
    return response
  }catch(e){
    console.log("Failed Get Fav",e.message)
  }
}