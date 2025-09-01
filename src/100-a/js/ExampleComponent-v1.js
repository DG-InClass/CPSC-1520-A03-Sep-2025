export default class ExampleComponent {
    init(container) {
      this.container = container;
      this.render();
    }
  
    render() {
      this.container.innerHTML = ExampleComponent.markup(this);
    }
  
    static markup({}) {
      return `
        <h1>Hello, World!</h1>
      `;
    }
  
    constructor(container) {
      // The constructor should only contain the boiler plate code for finding or creating the reference.
      if (typeof container.dataset.ref === 'undefined') {
        this.ref = Math.random();
        ExampleComponent.refs[this.ref] = this;
        container.dataset.ref = this.ref;
        this.init(container);
      } else {
        // If this element has already been instantiated, use the existing reference.
        return ExampleComponent.refs[container.dataset.ref];
      }
    }
  }
  
  ExampleComponent.refs = {};
  
  document.addEventListener('DOMContentLoaded', () => {
    new ExampleComponent(document.getElementById('example-component'))
  });