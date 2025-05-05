

export const AddFev = async({token, id}) => {
  try{
      const response = await fetch('http://127.0.0.1:8000/api/favorites', {
      method:'Post',
      headers:{
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "recipe_id": id,
      })
    })
    const data = await response.json();

    if(!response.ok){
      console.log("Add recipe faild", data.message)
    }

    return data
  }catch(e){
    console.log(e.message)
  }
}


export const isFav = async({token, id}) => {
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/favorites/check/${id}`,{
      method: 'Get',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    const data = await response.json()

    return data.is_favorited
  }catch(e){
    console.log(e.message)
  }
}


export const DelFev = async ({token, id}) =>{
  try{
    const response = await fetch(`http://127.0.0.1:8000/api/favorites/${id}`,{
      method: "Delete",
      headers:{
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    const data = response.json();

    return data
  }catch(e){
    console.log("Failed Delete",e.message)
  }
}