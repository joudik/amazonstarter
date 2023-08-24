import React from 'react'
import './Virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className="v-container">
      <div className="left-v">
        <span>Virtual try-on</span>
        <span>Never buy the wrong product</span>
        <span>Try now</span>
        <img src={Shade} alt="" />
      </div>

      <div className="right-v">
        <div className="wrapper-v">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}

export default Virtual
