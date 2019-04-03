import {loop} from './Loop'
export default class Animator {
    start(cb) {
        if (!this.animated) {
            this.animated = true
            this.id = loop.start(cb)
        }
    }

    stop() {
        if (this.animated) {
            this.animated = false
            loop.stop(this.id)
        }
    }
}
