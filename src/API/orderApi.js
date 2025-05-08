import { api } from "./api"


export const getAllOrders = async(token) =>{
  try{
    if(token){
      const response = await api('orders', {
        headers:{
          Authorization: `Bearer ${token}`,
        },
      })
      return response
    }
  }catch(e){
    console.log('get orders failed', e.message)
  }
}

export const AddOrder = async({token, id, q}) =>{
  try{
    const response = await api('orders', {
      method: 'post',
      headers:{
        Authorization: `Bearer ${token}`,
      },
      body: {
        "recipe_id": id,
        "quantity": q
      }
    })
    return response
  }catch(e){
    console.log('Add orders failed', e.message)
  }
}


export const DeleteOrder = async({token, id, q}) =>{
  try{
    const response = await api(`orders`, {
      method: 'Delete',
      headers:{
        Authorization: `Bearer ${token}`,
      },
      body: {
        "recipe_id": id,
        "quantity": q
      }
    })
    return response
  }catch(e){
    console.log('get orders failed', e.message)
  }
}

