const getCurrTime = () => {
    return new Date().getTime()
}

class LoopObject {
    constructor(cb) {
        this.currTime = getCurrTime()
        this.cb = cb
        this.id = this.currTime
    }

    execute() {
        if (this.cb) {
            this.cb()
        }
    }
}

class Loop {

    constructor() {
        this.loopObjects = []
    }

    start(cb, frequency) {
        const loopObject = new LoopObject(cb, frequency)
        this.loopObjects.push(loopObject)
        if (this.loopObjects.length == 1) {
            this.loop()
        }
        return loopObject.id;
    }

    loop() {
        this.interval = setInterval(() => {
            this.loopObjects.forEach((loopObject) => {
                loopObject.execute()
            })
        }, 50)
    }

    stop(id) {
        this.loopObjects = this.loopObjects.filter(loopObject => loopObject.id != id)
        if (this.loopObjects.length == 0) {
            clearInterval(this.interval)
        }
    }
}

export const loop = new Loop()
