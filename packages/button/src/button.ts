import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Button component.
 */
@customElement('norppa-button')
export class Button extends LitElement {
  render() {
    return html` <button>Button</button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-button': Button;
  }
}
