import React from "react";
import { Post } from './Post'
import { object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  argTypes: { onClick: { action: 'clicked' } },
  title: 'Post'
}

export const ListPost = () => [
  <Post
   post={{title: 'title', body: 'body', id: 34}}
   onClick={action('api calling')}
  />
]