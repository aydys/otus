import React from "react";

type Props = {
  post: {
    title: string,
    id: number,
    body: string
  }
}

export class InfoPost extends React.Component< Props, {}> {

  shouldComponentUpdate(nextProps: Props): boolean {
    return nextProps.post.id !== this.props.post.id
  }

  componentDidUpdate(prevProps: Props) {
    if(prevProps.post !== this.props.post) {
      this.forceUpdate();
    }
  }
  
  render() {
    const {post} = this.props;

    return <>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </>
  }
}
