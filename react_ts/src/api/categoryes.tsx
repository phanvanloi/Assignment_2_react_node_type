import { instance } from "./instance";
import { ICategoryes } from "../types/categoryes";

const user = JSON.parse(localStorage.getItem("user") as string)
let token = ''
if (user) {
    token = user.accessToken
}

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmJjZTI4MzE3NzljYTk0Y2E5YTlkNSIsImlhdCI6MTY4MTEwMzU1NywiZXhwIjoxNjgxMTg5OTU3fQ.WmT9A7gPmdBZM9Cgkg2FKTDtZWbw_O3j_MO634t0njo'

export const getAllCategoryes = () => {
    return instance.get("/categoryes")
}

export const getOneCategory = (id: Number | String | undefined) => {
    return instance.get(`/categoryes/${id}`)
}

export const deleteCategory = (id: Number | String) => {
    return instance.delete(`/categoryes/${id}`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}

export const addCategoryes = (product: ICategoryes) => {
    return instance.post("/categoryes", product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}
export const updateCategory = (product: ICategoryes) => {
    return instance.patch(`/categoryes/${product._id}`, product, {
        headers: {
            Authorization: `bearer ${token}`
        }
    })
}