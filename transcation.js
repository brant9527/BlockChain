/**
 * Transaction
 *  recipientAddr:收款人
 * sender
 */
const state ={
    recipientAddr :'',
    senderAddr:'',
    value: 0
}
export const Transaction = {
    generate :(rec,sen,val) => {
        state.recipientAddr = rec
        state.senderAddr = sen
        state.value = val
        return Object.assign(state)
    }
}