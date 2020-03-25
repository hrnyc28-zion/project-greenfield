import React from 'react';
import RelatedProducts from './RelatedProducts';
import YourOutfit from './YourOutfit';
import ComparisonModal from './ComparisonModal';

class RelateAndCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: [
        {
          id: 26,
          name: 'Ursula Backpack',
          slogan: 'Illo et est.',
          description:
            'Vel aut alias non pariatur officiis. Culpa accusamus aut. Autem aliquid eaque illum mollitia dolorum laboriosam velit. Doloribus est quos et esse non reprehenderit omnis. Sit similique quia deleniti repellendus iure reprehenderit et.',
          category: 'Backpack',
          default_price: '995',
        },
        {
          id: 27,
          name: 'Americo Hoodie',
          slogan:
            'Laboriosam ut voluptates nobis tenetur deserunt voluptatibus.',
          description:
            'Sapiente atque dolorem officia consequatur atque. Qui itaque et aspernatur rerum est voluptatem quasi. Aut aut maxime nisi repudiandae.',
          category: 'Hoodie',
          default_price: '809',
        },
        {
          id: 28,
          name: 'Celestino Trousers',
          slogan: 'Debitis quaerat omnis blanditiis aut qui.',
          description:
            'Eius excepturi odit magnam similique. Consequatur aspernatur maiores labore ipsum autem doloremque illo esse. Dignissimos aliquam magni dolores adipisci voluptatum necessitatibus adipisci doloremque quis.',
          category: 'Trousers',
          default_price: '218',
        },
        {
          id: 29,
          name: 'Imelda Coat',
          slogan: 'Eligendi inventore qui iste sit officia.',
          description:
            'Ut optio quos ducimus excepturi. Vitae eum expedita magni reiciendis dolorum. Laborum laboriosam et iste et qui perspiciatis porro minima fugiat.',
          category: 'Coat',
          default_price: '589',
        },
        {
          id: 30,
          name: 'Brianne Sunglasses',
          slogan: 'Placeat architecto deserunt deserunt quaerat rerum odio.',
          description:
            'Non labore architecto quis quae alias molestiae quae. Soluta quibusdam quisquam aliquid quasi rerum possimus doloremque quisquam omnis. Laudantium earum dolores iure quis.',
          category: 'Sunglasses',
          default_price: '777',
        },
        {
          id: 31,
          name: 'Sadye Backpack',
          slogan: 'Cum aut itaque.',
          description:
            'Impedit aut voluptatem sunt temporibus incidunt. Eum consequatur mollitia ad voluptatum voluptatum qui culpa. Qui magni officia sint ea omnis est labore. Numquam ut praesentium harum architecto soluta eaque iure. Sequi enim aliquid rem qui.',
          category: 'Backpack',
          default_price: '395',
        },
      ],
    };
  }

  render() {
    const { relatedProducts } = this.state;
    return (
      <div>
        <RelatedProducts relatedProducts={relatedProducts} />
        <YourOutfit />
        <ComparisonModal />
      </div>
    );
  }
}

export default RelateAndCompare;
