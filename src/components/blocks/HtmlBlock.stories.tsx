import React from 'react'
import { HtmlBlock } from './HtmlBlock';

export const HtmlBlockStory = () => (<div style={
  {
    width: '100%',
    height: '100%',
  }
}>
  <HtmlBlock
    block={{
      'id': 'html',
      'type': 'html',
      'content': `<div>This is an HTML</div> <b>inside</b> <p>an HTML block</p>`
    }}
  />
</div>);
