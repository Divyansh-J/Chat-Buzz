import User from "../models/user.model.js";

export const getUsersFromSidebar = async (req, res, next) => {
    try{
        const loggedInUser = req.user.id

        const allUsersExceptLoggedInUser = await User.find({
            _id: {$ne: loggedInUser}
        }).select("-password");

        res.status(200).json(allUsersExceptLoggedInUser);
    }catch(error){
        next(error);
    }
}

// export default getUsersFromSidebar;