import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Header component.
 */
@customElement('norppa-header')
export class Header extends LitElement {
  @property()
  tag: 'h1' | 'h2' | 'h3' = 'h1';

  render() {
    if (this.tag === 'h1') {
      return html`<h1><slot /></h1>`;
    }

    if (this.tag === 'h2') {
      return html`<h2><slot /></h2>`;
    }

    if (this.tag === 'h3') {
      return html`<h3><slot /></h3>`;
    }

    return html`<h1><slot /></h1>`;
  }
}

declare global {
  interface HTMLElementtagMap {
    'norppa-header': Header;
  }
}
