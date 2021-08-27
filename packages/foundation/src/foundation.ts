import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
/** *
Foundation
component. */ @customElement('norppa-foundation')
export class Foundation extends LitElement {
  render() {
    return html` <div><slot></slot></div> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'norppa-foundation': Foundation;
  }
}
