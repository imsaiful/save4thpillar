import React from 'react'
import {Route} from 'react-router-dom'
import NewsListView from './Container/NewsListView';


 const routes = () => {
  return (
    <div>
        <Route exact path="/" component={NewsListView} />
        {/* <Route exact path="/:articleID" component={ArticleDetailView} /> */}

      
    </div>
  )
}

export default routes;