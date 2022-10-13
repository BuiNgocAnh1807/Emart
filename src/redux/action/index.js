export const addCart = (product) => {
    return {
        type: "ADD_CART",
        payload: product
    }
}
export const delCart = (product) => {
    return {
        type: "DEL_CART",
        payload: product
    }
}