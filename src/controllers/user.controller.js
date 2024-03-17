import { asyncHandler } from "../utils/asyncHandler";

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "The code is working fine"
    })
})  


export {registerUser}