import DOMFader from './DOMFader'

export default class DOMFaderFactory {
    static create(div, fadein) {
        const domFader = new DOMFader(div, fadein)
        domFader.start()
    }
}
