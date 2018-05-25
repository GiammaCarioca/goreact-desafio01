import React, { Component, Fragment } from 'react';

import Header from './Header';
import Post from './Post';

import './style.css';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
        author: 'Rick Grimes',
        timestamp: 'há 3 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra massa eget massa lacinia mattis. In sodales eleifend nisi non tempus. Suspendisse viverra leo lectus, et vehicula turpis fermentum sed. Nullam metus libero, placerat vitae ullamcorper at, bibendum nec magna. Mauris eget metus magna. Donec lacus neque, pretium non eros et, tincidunt ullamcorper lacus. Donec eleifend odio in feugiat dapibus. Mauris et nulla congue, vulputate elit a, feugiat elit.',
      },
      {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
        author: 'Maggie Greene',
        timestamp: 'há 2 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra massa eget massa lacinia mattis. In sodales eleifend nisi non tempus. Suspendisse viverra leo lectus, et vehicula turpis fermentum sed. Nullam metus libero, placerat vitae ullamcorper at, bibendum nec magna. Mauris eget metus magna. Donec lacus neque, pretium non eros et, tincidunt ullamcorper lacus. Donec eleifend odio in feugiat dapibus. Mauris et nulla congue, vulputate elit a, feugiat elit.',
      },
      {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
        author: 'Glenn Rhee',
        timestamp: 'há 1 min',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris viverra massa eget massa lacinia mattis. In sodales eleifend nisi non tempus. Suspendisse viverra leo lectus, et vehicula turpis fermentum sed. Nullam metus libero, placerat vitae ullamcorper at, bibendum nec magna. Mauris eget metus magna. Donec lacus neque, pretium non eros et, tincidunt ullamcorper lacus. Donec eleifend odio in feugiat dapibus. Mauris et nulla congue, vulputate elit a, feugiat elit.',
      },
    ],
  };

  render() {
    return (
      <Fragment>
        <Header>RocketBook</Header>
        <div className="posts">
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      </Fragment>
    );
  }
}
