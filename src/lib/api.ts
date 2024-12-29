
export const getGroupsApi = async ()=>{
    try{
        const myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
    
        const getGroupsRes=await fetch(`${import.meta.env.VITE_APP_URL}/groups`, {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
            })
        .then((response) => response.json())
        .then((result) => result)
        if(getGroupsRes.error){
            throw new Error(getGroupsRes.error)
        }
        return {data:getGroupsRes}
    }
    catch(error){
        return {error}
    }
}