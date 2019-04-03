import {createBlocks} from './BlockCreator.mjs'
var i = 0
const blocks = createBlocks()
const startAnimForBlock = () => {
    var n = i
    blocks[n].startAnimation()
    i++
    if (i < blocks.length) {
        setTimeout(startAnimForBlock, 40)
    }
}
startAnimForBlock()
