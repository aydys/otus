import React from "react";
import { ListPosts } from './ListPosts'
import { withKnobs } from "@storybook/addon-knobs";

export default {
  decorations: [withKnobs],
  title: 'ListPosts'
}

export const ListPostsStory = () => [
  <ListPosts key='jsx' />
]