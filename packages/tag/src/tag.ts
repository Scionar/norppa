import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Tag component.
 */
@customElement('norppa-tag')
export class Tag extends LitElement {
  @property()
  href: string = '';

  static styles = css`
    :host {
      background-color: var(--primary-color);
      color: var(--secondary-color);
      display: inline-block;
    }

    a {
      display: inline-block;
      padding: .5em .75em;
      text-d
    }

    a:link {
      text-decoration: none;
    }

    a:visited {
      color: var(--secondary-color);
    }
  `;

  render() {
    return html`<a ?href=${this.href}><slot /></a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'norppa-tag': Tag;
  }
}
