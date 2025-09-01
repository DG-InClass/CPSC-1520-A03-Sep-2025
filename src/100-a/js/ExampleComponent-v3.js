export default class ExampleComponent {
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
      this.container.innerHTML = ExampleComponent.markup(this);
      this.pageElement = this.container.querySelector('.sub-component-example');
      new AnotherExampleComponent(this.pageElement);
    }
  
    static markup({title}) {
      return `
        <h1>${title}</h1>
        <div class="sub-component-example"></div>
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