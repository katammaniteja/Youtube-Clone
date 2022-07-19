import React from 'react'
import './_homeScreen.scss'
import CategoriesBar from './../../CategoriesBar/CategoriesBar'
import Video from './../../Video/Video'

export default function HomeScreen() {
  return (
    <div className="container">
      <CategoriesBar/>
      <div className="row">
        {
          [...new Array(20)].map((data)=>{
            return(
              <div className="col-lg-3 col-md-4">
                <Video/>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}
