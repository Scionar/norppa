import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Link } from 'norppa-link';
import { Header } from 'norppa-header';

/**
 * Card component.
 */
@customElement('norppa-card')
export class Card extends LitElement {
  @property({ type: String })
  title: string = '';

  @property({ type: String })
  excerpt: string = '';

  @property({ type: Array })
  tags: string[] = [];

  @property({ type: String })
  headerTag: string = 'h2';

  render() {
    return html`
      <article>
        <norppa-link href="/">
          <norppa-header tag="${this.headerTag}"> ${this.title} </norppa-header>
        </norppa-link>

        <p>${this.excerpt}</p>
        <footer>${this.tags.map((tag) => html` <span>${tag}</span> `)}</footer>
      </article>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'norppa-card': Card;
  }
}
