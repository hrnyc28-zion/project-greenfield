const sampleStore = {
  // derived from user interaction
  selected: {
    // current selected style
    style: {
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80'
        }
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15
      }
    },

    // index of current selected thumbnail
    thumbnailIndex: 0
  },

  // from Product API
  currentProduct: {
    id: 11,
    name: 'Air Minis 250',
    slogan: 'Full court support',
    description:
      'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.',
    category: 'Basketball Shoes',
    default_price: '0',
    features: [
      {
        feature: 'Sole',
        value: 'Rubber'
      },
      {
        feature: 'Material',
        value: 'FullControlSkin'
      }
    ]
  },

  // from Product API
  currentStyles: [
    {
      style_id: 1,
      name: 'Forest Green & Black',
      original_price: '140',
      sale_price: '0',
      'default?': 1,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg'
        },
        {
          thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_1_photo_number.jpg'
        }
        // ...
      ],
      skus: {
        XS: 8,
        S: 16,
        M: 17,
        L: 10,
        XL: 15
      }
    },
    {
      style_id: 2,
      name: 'Desert Brown & Tan',
      original_price: '140',
      sale_price: '0',
      'default?': 0,
      photos: [
        {
          thumbnail_url: 'urlplaceholder/style_2_photo_number_thumbnail.jpg',
          url: 'urlplaceholder/style_2_photo_number.jpg'
        }
        // ...
      ],
      skus: {
        S: 16,
        XS: 8,
        M: 17,
        L: 10,
        XL: 15,
        XXL: 6
      }
    }
  ]
};

export default sampleStore;
