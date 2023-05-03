
const user = JSON.parse(localStorage.getItem("userDetails"))

export const updateProfileDetails = (state = user, action) => {
    switch (action.type) {
        case "SET_PROFILE_DETAILS":
            localStorage.setItem("userDetails", JSON.stringify(action.payload))
            return JSON.parse(localStorage.getItem("userDetails"))
        case "LOG_OUT":
            localStorage.removeItem("userDetails")
            return null;
        default:
            return JSON.parse(localStorage.getItem("userDetails"))
    }
}