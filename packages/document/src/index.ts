import { Button } from 'norppa-button';
import { Header } from 'norppa-header';
import { Link } from 'norppa-link';
import { Grid, Row, Col } from 'norppa-grid';
import { Card } from 'norppa-card';
import { html, render } from 'lit-html';

new Button();
new Header();
new Link();
new Grid();
new Row();
new Col();
new Card();

const articles = [
  {
    title: 'Mediterranean monk seal',
    excerpt:
      'The Mediterranean monk seal is classified in the Phocidae family. It grows from about 2.6 feet in length at birth to an average of 7.9 feet in adults. Reproductive maturity for the seal is reached at roughly age four while the average lifespan falls between 20 to 25 years.',
    tag: ['Seal']
  },
  {
    title: 'Northern elephant seal',
    excerpt:
      "The northern elephant seal is categorized in the Phocidae family and it one of the elephant seal's two species. The animal is named for its great size as well as the large proboscis sported by males that are used in making loud roaring noises, particularly during the mating competition.",
    tag: ['Seal']
  },
  {
    title: 'Ross seal',
    excerpt:
      'The Ross seal inhabits ice packs around the Antarctic. It is characterized by long fore and hind flippers, very short fur, and a fairly small head with a wide and short blunt-ended snout.',
    tag: ['Seal']
  },
  {
    title: 'Crabeater seal',
    excerpt:
      "The crabeater seal is recognized as the world's most abundant seal species with possibly as numerous as 75 million individuals. The abundance is attributed to its specialized predation of the Southern Ocean's abundant Antarctic krill by the use of its sieve-like tooth structure.",
    tag: ['Seal']
  }
];

// Define a template
const myTemplate = () =>
  html`
    <div>
      <header>Hero</header>
      <main>
        <norppa-grid>
          <norppa-row>
            ${articles.map(
              (item) => html`
                <norppa-col width-12>
                  <norppa-card
                    title=${item.title}
                    excerpt=${item.excerpt}
                    .tags=${item.tag}
                  />
                </norppa-col>
              `
            )}
          </norppa-row>
        </norppa-grid>
      </main>
      <footer>Footer</footer>
    </div>
  `;

// Render the template to the document
render(myTemplate(), document.body);
