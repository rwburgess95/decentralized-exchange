import React, { Component } from 'react'
import { connect } from 'react-redux'
import { exchangeSelector } from '../store/selectors'
import { loadAllOrders,subscribeToEvents } from '../store/interactions'
import Trades from './Trades'
import OrderBook from './OrderBook.js'
import MyTransactions from './MyTransactions.js'
import PriceChart from './PriceChart.js'
import Balance from './Balance.js'
import NewOrder from './NewOrder.js'

class Content extends Component {
  UNSAFE_componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    await loadAllOrders(this.props.exchange, dispatch)
    await subscribeToEvents(this.props.exchange, dispatch)
  }

  render() {
    return (
      <div className="content">
        <div className="vertical-split">
        <Balance />
        <NewOrder />
        </div>
        <OrderBook />
        <div className="vertical-split">
          <PriceChart />
          <MyTransactions />
       </div>
        <Trades />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    exchange: exchangeSelector(state),
  }
}

export default connect(mapStateToProps)(Content)
