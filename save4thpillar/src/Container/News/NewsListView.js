import React, { Component } from 'react';
import Ndtv from './ndtv';
import Hindustan from './Hindustan';
import Indianexpress from './Indianexpress';
import Indiatv from './Indiatv';
import News18 from './News18';
import Oneindia from './Oneindia';
import Republic from './republic';
import Thehindu from './Thehindu';
import Zeenews from './Zeenews';
import Firstpost from './Firstpost';

// #  Ndtv,Republic,Indianexpress,Indiatv,Zeenews,\
// #    Thehindu,Hindustan,Firstpost,News18,Oneindia

class NewsListView extends Component {

    
    render() {
    return (
      <div>
        
        <h1>News</h1>
          <Ndtv />
          <Republic />
          <Indianexpress />
          <Indiatv />
          <Zeenews />
          <Thehindu />
          <Hindustan />
          <Firstpost />
          <News18 />
          <Oneindia />
    
      </div>
    )
  }
}

export default NewsListView;