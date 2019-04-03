import Animator from './Animator.mjs'
import State from './State.mjs'
export default class DOMFader {
    constructor(node, fadein) {
        this.node = node
        this.animator = new Animator()
        this.state = new State()
        this.sop = 0
        this.dop = 1
        if (!fadein) {
            this.sop = 1
            this.dop = 0
        }
    }

    update() {
        this.node.style.opacity = this.sop + (this.dop - this.sop) * this.state.scale
    }

    start() {
        this.state.startUpdating(() => {
            this.animator.start(() => {
                this.update()
                this.state.update(() => {
                    this.animator.stop()
                })
            })
        })
    }
}
