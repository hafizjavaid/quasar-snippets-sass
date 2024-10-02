export default defineEventHandler(async (event) => {

    const { user } = await getUserSession(event)

    console.log(user);
    

    return user;
   
})