import DOMFader from './DOMFader.mjs'

export default class DOMFaderFactory {
    static create(div, fadein) {
        const domFader = new DOMFader(div, fadein)
        domFader.start()
    }
}
