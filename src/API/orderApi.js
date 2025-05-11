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

export const getOneOrder = async({token, id}) =>{
  try{
    if(token){
      const response = await api(`orders/${id}`, {
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

export const AddOrder = async({token, id, Rq, Iq}) =>{
  try{
    const response = await api('orders', {
      method: 'post',
      headers:{
        Authorization: `Bearer ${token}`,
      },
      body: {
        "recipe_id": id,
        "recipe_quantity": Rq,
        "ingredients_quantity": Iq,
      }
    })
    return response
  }catch(e){
    console.log('Add orders failed', e.message)
  }
}


export const DeleteOrder = async({token, id, Rq, Iq}) =>{
  try{
    const response = await api(`orders/${id}`, {
      method: 'Delete',
      headers:{
        Authorization: `Bearer ${token}`,
      },
      body: {
        "recipe_id": id,
        "recipe_quantity": Rq,
        "ingredients_quantity": Iq,
      }
    })
    return response
  }catch(e){
    console.log('Delete orders failed', e.message)
  }
}


export const UpdateOrder = async ({token, id, u}) =>{
  try{
    const response = await api(`orders/${id}`, {
      method: 'Put',
      headers:{
        Authorization: `Bearer ${token}`,
      },
      body: u
    })
    return response
  }catch(e){
    console.log('get orders failed', e.message)
  }
}
