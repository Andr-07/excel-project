import { Domlistener } from "./Domlistener";

export class ExcelComponent extends Domlistener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || 'none'
        this.emitter = options.emitter
        this.unsubscribers = []
        this.prepare()
    }
    // Setting our component before init
    prepare() {}

    // Return template of component
    toHTML() {
        return ''
    }

    // Inform listeners
    $emit(event, ...args) {
        this.emitter.emit(event, ...args)
    }

    // Subscribe on event
    $on(event, fn) {
        const unsub = this.emitter.subscribe(event, fn)
        this.unsubscribers.push(unsub)
    }

    // init component
    init() {
        this.initDOMListeners()
    }

    // remove component
    destroy() {
        this.removeDOMListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}