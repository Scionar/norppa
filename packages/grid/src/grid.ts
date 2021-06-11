import { LitElement, html, css, unsafeCSS } from 'lit';
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
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return css`
      :host {
        box-sizing: border-box;
        display: block;
        padding-left: calc(var(--grid-gutter) / 2);
        padding-right: calc(var(--grid-gutter) / 2);
      }

      ${
        // Create per column size styling

        unsafeCSS(
          cols
            .map(
              (item) => css`
                :host([width-${item}]) {
                  width: calc(((100% - 1px) / 12) * ${item});
                }
              `
            )
            .join(' ')
        )
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
