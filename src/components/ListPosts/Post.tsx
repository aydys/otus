import React from "react";

type Props = {
  post: {},
  onClick: (id: number) => void
}

export class Post extends React.Component<Props> {
  render() {
    return <div>Post</div>
  }
}