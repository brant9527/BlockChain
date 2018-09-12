/**
 * block Chain
 * nodeId :id
 * blocks:block list
 * transactionPool:
 */
import {
    Transcation
} from './transcation'
import {
    block
} from './block'
import BigNumber from 'bignumber'
const difficulty = 4
const state = {
    nodeId: 0,
    blocks: [],
    transactionPool: [],
    genesisBlock: block.generate(0, [], 0, ''),
    target: 2 ** (256 - difficulty)
}
const BlockChain = {
    init: (id) => {
        state.nodeId = id
    },
    submitTranscation: (send, rec, val) => {
        state.transactionPool.push(Transcation.generate(send, rec, val))
    },
    isPowValid: (pow) => {
        try {
            if (pow.startswith('0x')) {
                pow = '0x' + pow
            }
            return new BigNumber(pow).lessThanOrEqualTo(state.target)
        } catch (e) {
            return false
        }
    }
}