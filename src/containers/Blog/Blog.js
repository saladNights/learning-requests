import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount(){
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => (
          {
            ...post,
            author: 'Andrei'
          }
        ));
        this.setState({posts: updatedPosts})
      })
      .catch(error => {
        console.log(error);
      })
  }

  selectPostIdHandler = (id) => {
    this.setState({selectedPostId: id});
  };

    render () {

    const posts = this.state.posts.map(post => (
      <Post
        title={post.title}
        key={post.id}
        author={post.author}
        clicked={() => this.selectPostIdHandler(post.id)}
      />
    ));

        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;