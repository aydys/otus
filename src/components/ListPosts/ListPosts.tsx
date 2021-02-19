import React from 'react'
import { Post } from "./Post";
import { InfoPost } from "./InfoPost";

import fetch from 'node-fetch'

type PostsProps = {}

interface PostsState {
  posts: any[],
  post: {
    title: string,
    id: number,
    body: string
  }
}

const styled = {
  post: {border: '1px solid grey'},
  containerInfoPost: {width: '40%', float: 'right', marginLeft: 20, border: '1px solid grey'},
  containerList: {width: '50%', float: 'left'}
}

export class ListPosts extends React.Component <PostsProps, PostsState> {

  constructor(props: PostsProps) {
    super(props)
    this.state = {
      posts: [],
      post: {
        title: '',
        id: 0,
        body: ''
      }
    }

    this.getPosts = this.getPosts.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  getPosts<T>(): Promise<T> {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
  }

  onClick<T>(id: number): void {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        console.log(post)
        this.setState({ post: post })
      } )
  } 

  componentDidMount(): void {
    this.getPosts<object[]>()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    const { posts, post } = this.state;
    return <React.Fragment>
      <h1>Posts</h1>
      <div>
         <div style={styled.containerList as React.CSSProperties}>
          <ul >
          { posts.map(post => (
              <li key={post.id} style={styled.post}>
                <Post post={post} onClick={this.onClick} />
              </li>
          ))}
        </ul>
        </div>
          
        <div style={styled.containerInfoPost as React.CSSProperties}>
          <InfoPost post={post} />
        </div>
      </div>           
    </React.Fragment>
  }
}
