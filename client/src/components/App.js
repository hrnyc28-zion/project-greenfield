import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import ReviewList from './reviews/ReviewList.js';

function App() {
  return (
    <div className="App">
      <ReviewList reviewList={dummyData} />
    </div>
  );
}

export default App;

const dummyData = {
  product: '8',
  page: 0,
  count: 12,
  results: [
    {
      review_id: 57665,
      rating: 3,
      summary: 'cookies & cream',
      recommend: 0,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 1,
      photos: [],
    },
    {
      review_id: 57661,
      rating: 5,
      summary: "Not gonna lie, that's some good quality",
      recommend: 1,
      response: null,
      body:
        "For $2 I didn't expect jordans, but holy hell these are some dope kicks!",
      date: '2020-02-14T00:00:00.000Z',
      reviewer_name: 'Lebron James',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 57664,
      rating: 5,
      summary: 'Kendrick Lamar - Loyalty',
      recommend: 1,
      response: null,
      body:
        "Tell me who you loyal to Is it money? Is it fame? Is it weed? Is it drink? Is it comin' down with the loud pipes in the rain? Big chillin', only for the power in your name Tell me who you loyal to Is it love for the streets when the lights get dark? Is it unconditional when the 'Rari don't start? Tell me when your loyalty is comin' from the heart",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'kendrick_lamar',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 57666,
      rating: 5,
      summary: 'cookies & cream part 2',
      recommend: 1,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 0,
      photos: [
        {
          id: 27258,
          url:
            'https://www.chewoutloud.com/wp-content/uploads/2013/08/Cookies-n-Cream-Ice-Cream-2.jpg',
        },
      ],
    },
    {
      review_id: 57667,
      rating: 5,
      summary: 'cookies & cream part 3',
      recommend: 1,
      response: null,
      body: "cookies and cream is the best ice cream flavor, don't @ me AGAIN",
      date: '2020-02-26T00:00:00.000Z',
      reviewer_name: 'ice-cream-boss',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 57670,
      rating: 5,
      summary: 'Kendrick Lamar - Loyalty',
      recommend: 1,
      response: null,
      body:
        "Tell me who you loyal to Is it money? Is it fame? Is it weed? Is it drink? Is it comin' down with the loud pipes in the rain? Big chillin', only for the power in your name Tell me who you loyal to Is it love for the streets when the lights get dark? Is it unconditional when the 'Rari don't start? Tell me when your loyalty is comin' from the heart",
      date: '2020-02-28T00:00:00.000Z',
      reviewer_name: 'kendrick_lamar',
      helpfulness: 0,
      photos: [],
    },
  ],
};
