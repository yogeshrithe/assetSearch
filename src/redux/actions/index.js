

export const LOG_OUT = () => {
    return {
        type: "LOG_OUT",
    }
}

export const SET_PROFILE_DETAILS = (payload) => {
    return {
        type: "SET_PROFILE_DETAILS",
        payload: payload
    }
}
