import { capitalize } from "./utils"

export class Domlistener {
    constructor($root, listeners = []) {
        if (!$root) {
            console.error('No $root provided for DomListener')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners(){  
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                console.error(`Method ${method} is not  implemented in ${this.name} Component`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListeners(){
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}