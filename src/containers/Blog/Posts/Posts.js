import React, {Component} from 'react';
import axios from '../../../axios';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
class Posts extends Component{

  state = {
    posts: [],
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
    // this.props.history.push({pathname: `/posts/${id}`});
    this.props.history.push(`/posts/${id}`);
  };

  render(){
    const posts = this.state.posts.map(post => {
      return (
        /*<Link to={'/posts/' + post.id} key={post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.selectPostIdHandler(post.id)}
          />
        </Link>*/
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.selectPostIdHandler(post.id)}
        />
      )
    });

    return (
      <div>
        <section className="Posts">
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>

    );
  }
}

export default Posts;