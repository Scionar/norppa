import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Link component.
 */
@customElement('norppa-link')
export class Link extends LitElement {
  @property() href = '';

  render() {
    return html`<a ?href=${this.href}><slot /></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-link': Link;
  }
}
