import DOMFaderFactory from './DOMFaderFactory.mjs'

const w = window.innerWidth
const h = window.innerHeight
const n = 10
const size = Math.min(w, h) / (n + 2)

class Block {
    constructor(i) {
        this.i = i
        this.create()
    }

    create() {
        this.div = document.createElement('div')
        this.div.style.width = size
        this.div.style.height = size
        this.div.style.background = 'green'
        this.div.style.position = 'absolute'
        this.div.style.left = 0
        this.div.style.top = this.i * size + size / 10
        document.body.appendChild(this.div)
        this.div.style.opacity = 0
    }

    startAnimation() {
        DOMFaderFactory.create(this.div, true)
    }
}

export const createBlocks = () => {
    const blocks = []
    for (var i = 0; i < n; i++) {
        const block = new Block(i)
        blocks.push(block)
    }
    return blocks
}

export const startAnimation = (blocks) => {
    blocks.forEach((block) => {
        block.startAnimation()
    })
}
