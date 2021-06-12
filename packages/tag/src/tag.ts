import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
/** *
Tag
component. */ @customElement('norppa-tag')
export class Tag extends LitElement {
  render() {
    return html` <div><slot></slot></div> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'norppa-tag': Tag;
  }
}
