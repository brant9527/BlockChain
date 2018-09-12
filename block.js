/**
 * block 区块id
 * blockNumber :区块id
 * transaction 交易记录
 */
import {
    sha256
} from 'js-sha256'
const state = {
    blockNumber: 0,
    transaction: [],
    timeStamp: Date.now(),
    nonce: 0,
    prevBlock: ''
}
export const Block = {
    init: () => {

    },
    generate: (blockNumber, transaction, nonce, prevBlock) => {
        state.blockNumber = blockNumber
        state.transaction = transaction
        state.nonce = nonce
        state.prevBlock = prevBlock
        state.timeStamp = Date.now()
        return Object.assign({}, state)
    },
    computeSha256: (state) => {
        return sha256(JSON.stringify(state))
    }
}