export default async function ActivityStatus(){

    const PUBLIC_ACTIVITY_URL = import.meta.env.PUBLIC_ACTIVITY_URL

    const reponse = await fetch(PUBLIC_ACTIVITY_URL)
    const responseData = await reponse.json()

    return responseData
}