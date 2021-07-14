class Dictionary {
    constructor(selectorius, pavadinimas, list) {
        this.selector = selectorius;
        this.name = pavadinimas;
        this.dictionarylist = list;

        // tai elementas, kuriame generuosime visa turini
        this.DOM = null;
    }

    init() {
        // patikriname, jog validus this.selector
        // patikriname, jog validus this.dictionaryList
        // randam this.DOM
        if (!this.isValidSelector() ||
            !this.isValidDictionary() ||
            !this.findTargetElement()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias array.');
            return false;
        }
        return true;
    }

    isValidDictionary() {
        if (!Array.isArray(this.dictionarylist) ||
            this.dictionarylist.length === 0) {
            console.error('ERROR: zodynas turi buti ne tuscias array.');
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: pagal pateikta selector, norimo elemento nepavyko rasti.');
            return false;
        } 
        return true;
    }

    render() {
        console.log('piesiam turini........');
    }
}

export { Dictionary }