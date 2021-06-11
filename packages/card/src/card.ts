import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
/** *
Card
component. */ @customElement('norppa-card')
export class Card extends LitElement {
  render() {
    return html` <div><slot></slot></div> `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'norppa-card': Card;
  }
}
