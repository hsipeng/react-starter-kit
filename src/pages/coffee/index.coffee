import React from 'react'

import Proptypes from 'prop-types'
import Counter from '@/components/counter/Counter'
import {connect} from 'react-redux'
import {addStar, reduceStar} from '@/redux/actions/counter'

CoffeePage = (props) ->
  {num, onIncreaseClick, onReduceClick} = props
  return(
    <Counter
        num={num}
        name="点赞3 - coffeescript"
        handleAddClick={onIncreaseClick}
        handleRemoveClick={onReduceClick}
      />
  )

mapStateToProps = (state) ->
  num: state.counter.num

mapDispatchToProps = (dispatch) ->
  onIncreaseClick: () => dispatch(addStar()),
  onReduceClick: () => dispatch(reduceStar())

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoffeePage)
