import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Link component.
 */
@customElement('norppa-link')
export class Link extends LitElement {
  render() {
    return html` <a><slot /></a> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-link': Link;
  }
}
