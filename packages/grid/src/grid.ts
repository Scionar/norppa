import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * Grid component.
 */
@customElement('norppa-grid')
export class Grid extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      margin: auto;
      max-width: var(--grid-max-width);
      padding: 0 var(--grid-page-padding);
      width: 100%;
    }
  `;

  render() {
    return html`<slot />`;
  }
}

/**
 * Row component.
 */
@customElement('norppa-row')
export class Row extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin-left: calc(var(--grid-gutter) / 2);
      margin-right: calc(var(--grid-gutter) / 2);
    }
  `;

  render() {
    return html`<slot />`;
  }
}

/**
 * Col component.
 */
@customElement('norppa-col')
export class Col extends LitElement {
  static get styles() {
    return css`
      :host {
        box-sizing: border-box;
        display: block;
        padding-left: calc(var(--grid-gutter) / 2);
        padding-right: calc(var(--grid-gutter) / 2);
      }

      :host([width-1]) {
        width: calc(((100% - 1px) / 12) * 1);
      }

      :host([width-2]) {
        width: calc(((100% - 1px) / 12) * 2);
      }

      :host([width-3]) {
        width: calc(((100% - 1px) / 12) * 3);
      }

      :host([width-4]) {
        width: calc(((100% - 1px) / 12) * 4);
      }

      :host([width-5]) {
        width: calc(((100% - 1px) / 12) * 5);
      }

      :host([width-6]) {
        width: calc(((100% - 1px) / 12) * 6);
      }

      :host([width-7]) {
        width: calc(((100% - 1px) / 12) * 7);
      }

      :host([width-8]) {
        width: calc(((100% - 1px) / 12) * 8);
      }

      :host([width-9]) {
        width: calc(((100% - 1px) / 12) * 9);
      }

      :host([width-10]) {
        width: calc(((100% - 1px) / 12) * 10);
      }

      :host([width-11]) {
        width: calc(((100% - 1px) / 12) * 11);
      }

      :host([width-12]) {
        width: calc(((100% - 1px) / 12) * 12);
      }
    `;
  }

  render() {
    return html`<slot />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-grid': Grid;
    'norppa-row': Row;
    'norppa-col': Col;
  }
}
