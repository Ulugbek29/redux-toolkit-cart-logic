
export const totalCartItemsAmount = (array)=> {
    const total = array.reduce((acc, curItem)=> {
        return acc + curItem.quantity
    },0)
    return total
}