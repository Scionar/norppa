import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Tag component.
 */
@customElement('norppa-tag')
export class Tag extends LitElement {
  static styles = css`
    :host {
      background-color: var(--primary-color);
      display: inline-block;
    }
  `;

  render() {
    return html`<div><slot /></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-tag': Tag;
  }
}
