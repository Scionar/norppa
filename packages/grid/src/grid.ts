import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Button component.
 */
@customElement('norppa-grid')
export class Grid extends LitElement {
  render() {
    return html`<div></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-grid': Grid;
  }
}
