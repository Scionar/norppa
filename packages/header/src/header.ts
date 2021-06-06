import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Header component.
 */
@customElement('norppa-header')
export class Header extends LitElement {
  render() {
    return html` <h1>Header</h1> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-header': Header;
  }
}
