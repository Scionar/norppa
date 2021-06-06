import { Button } from 'norppa-button';
import { Header } from 'norppa-header';
import { Link } from 'norppa-link';
import { html, render } from 'lit-html';

new Button();
new Header();
new Link();

// Define a template
const myTemplate = () =>
  html`
    <div>
      Hello, Norppa!
      <norppa-header>Header</norppa-header>
      <norppa-button>Button</norppa-button>
      <norppa-link href="/about">Link</norppa-link>
    </div>
  `;

// Render the template to the document
render(myTemplate(), document.body);
