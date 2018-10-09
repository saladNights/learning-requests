import React, { Component } from 'react';
import {Route, NavLink, Redirect, Switch} from 'react-router-dom';
import Posts from '../../containers/Blog/Posts/Posts';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
import asyncComponent from '../hoc/asyncComponent';
import './Blog.css';

const AsyncNewPost = asyncComponent(() => import('../../containers/Blog/NewPost/NewPost'));

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
              <header>
                <nav>
                  <ul>
                    <li><NavLink to="/posts" exact>Posts</NavLink></li>
                    <li><NavLink to="/new-post">New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Switch>
                <Route path="/new-post" component={AsyncNewPost}/>
                <Route path="/posts" component={Posts}/>
                <Route render={() => <h1>Not Found</h1>}/>
                {/*<Redirect from="/" to="/posts"/>*/}
              </Switch>
            </div>
        );
    }
}

export default Blog;