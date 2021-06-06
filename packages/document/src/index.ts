import { Button } from 'norppa-button';
import { Header } from 'norppa-header';
import { html, render } from 'lit-html';

new Button();
new Header();

// Define a template
const myTemplate = () =>
  html`
    <div>
      Hello, Norppa!
      <norppa-header>Header</norppa-header>
      <norppa-button>Button</norppa-button>
    </div>
  `;

// Render the template to the document
render(myTemplate(), document.body);
