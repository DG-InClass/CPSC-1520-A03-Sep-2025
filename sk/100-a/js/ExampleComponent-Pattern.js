export default class JS_Component { // TODO rename JS_Component to your own name
    constructor(container) { // Footnote-1
        // The constructor should only contain the boiler plate code for finding or creating the reference.
        if (typeof container.dataset.ref === 'undefined') {
            this.ref = Math.random();
            JS_Component.refs[this.ref] = this;
            container.dataset.ref = this.ref;
            this.init(container);
        } else {
            // If this element has already been instantiated, use the existing reference.
            return JS_Component.refs[container.dataset.ref];
        }
    }

    set title(title) {
        this.titleValue = title;
        this.render();
    }

    get title() {
        return titleValue;
    }

    init(container) {
        this.container = container;
        this.titleValue = this.container.dataset.title;
        this.render();
    }

    render() {
        this.container.innerHTML = JS_Component.markup(this);
        this.pageElement = this.container.querySelector('.sub-component-example');
        this.clickMeButton = this.container.querySelector('.click-me');
        new AnotherExampleComponent(this.pageElement);

        this.addEventListeners();
    }

    static markup({ title }) {
        return `
        <h1>${title}</h1>
        <button class="click-me">Click Me</div>
        <div class="sub-component-example"></div>
      `;
    }

    addEventListeners() {
        this.clickMeButton().addEventListener('click', () =>
            this.container.dispatchEvent(new CustomEvent('click-me-was-clicked')));
    }
}

JS_Component.refs = {};

document.addEventListener('DOMContentLoaded', () => {
    new JS_Component(document.getElementById('js-component'))
});

// Footnote-1
//      What's nice in starting your code with
//      the constructor is that readers of
//      your code will quickly get an idea of
//      the context that your object expects.
//      In our case, the context is some HTML
//      markup that is acting as the container
//      to this component.
