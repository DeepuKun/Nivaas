export const getUserData = async() =>{
    try{
        const role = req.user.role;
        const recentSearchCities = req.user.recentSearchCities;
        res.json({success: true, role, recentSearchCities})

    }
    catch(error){
        res.json({success:false, message : error.message})
        
    }
}