import React from 'react'
import 'framework7/dist/css/framework7.ios.css'
import './../../styles/common.scss'
import '../../styles/core.scss'

export const CoreLayout = ({children}) => (
  <div className="c-wrap">
    <div className="views">
      <div className="view view-main">
        {children} 
      </div>
    </div>
    <div className="popup">
      <div className="view popup-view"> ...</div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
