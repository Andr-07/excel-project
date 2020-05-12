import { ExcelComponent } from "../../core/ExcelComponent";
import {$} from '@core/dom'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click', 'keydown'],
            ...options
        })
    }

    toHTML() {
        return `
        <div class="info">fx</div>
        <div id="formula" class="input" contenteditable spellcheck="false"></div>
        `
    }

    init() {
        super.init()
        this.$formula = this.$root.find('#formula')
        this.$on('table:select', $cell => {
            this.$formula.text($cell.text()) 
        })
        this.$on('table:input', $cell => {
            this.$formula.text($cell.text()) 
        })
    }

    onInput(){
        this.$emit('formula:input', $(event.target).text())
    }
    onClick(){
        console.log('Formula: onClick ', event)
    }
    onKeydown(event) {
        if (event.key === 'Enter' || event.key === 'Tab') {
            event.preventDefault()
            this.$emit('formula:done')
        }
    }
}