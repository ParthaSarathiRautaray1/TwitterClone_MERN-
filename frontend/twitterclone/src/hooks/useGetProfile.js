import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) =>{

    const dispatch = useDispatch()

    useEffect(() =>{
        console.log("Fetching profile with ID:", id);  // Check this

        const fetchMyProfile = async () => {
            try {
                if (!id) return;  // Exit if id is not provided
                
                console.log("Fetching profile with ID:", id);
                
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`,{
                    withCredentials:true
                });
               dispatch(getMyProfile(res.data.user)) 
            } catch (error) {
                console.log(error);                
            }

        }
        fetchMyProfile();
        
    },[id])  // Re-run the effect only when `id` changes
    
}

export default useGetProfile;