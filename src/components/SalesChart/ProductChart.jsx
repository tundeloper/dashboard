import React from 'react'
import './SalesChartStyle.scss'
import bitcoinIcon from '../../Assets/icons/bitcoin.svg'
import ethereumIcon from '../../Assets/icons/ethereum.svg'
import tetherIcon from '../../Assets/icons/tether.svg'
import cardIcon from '../../Assets/images/card.png'

function ProductChart() {
  return (
    <div className='ProductChartContainer'>
        <div className='ProductChart'>
            <div className='ProductChartIcon'>
            <img src={bitcoinIcon} alt="Bitcoin Icon" width="48px" height="48px" />
            </div>
            <div className='productLeftSide'>
                <div className='ProductChartInfo'>
                    <div className='productChartInfoTop'>
                        <span className='ProductName'>BITCOIN</span>
                        <span className='salesInfo'>Overral sales</span>
                    </div>
                    <div className='productChartInfoBottom'>
                        <div className='ProductPriceInfo'>
                            <span className='ProductAmount'>33.00124</span>
                            <span className='ProductTitle'>BTC</span>
                        </div>
                        <span className='MainProductPrice'>N945,000</span>
                    </div>
                </div>
                <span className='PercentageTag'>+20%</span>
            </div>
        </div>
        <div className='ProductChart'>
            <div className='ProductChartIcon'>
            <img src={ethereumIcon} alt="Ethereum Icon" width="48px" height="48px" />
            </div>
            <div className='productLeftSide'>
                <div className='ProductChartInfo'>
                    <div className='productChartInfoTop'>
                        <span className='ProductName'>ETHEREUM</span>
                        <span className='salesInfo'>Overral sales</span>
                    </div>
                    <div className='productChartInfoBottom'>
                        <div className='ProductPriceInfo'>
                            <span className='ProductAmount'>33.00124</span>
                            <span className='ProductTitle'>ETH</span>
                        </div>
                        <span className='MainProductPrice'>N945,000</span>
                    </div>
                </div>
                <span className='PercentageTag'>+20%</span>
            </div>
        </div>
        <div className='ProductChart'>
            <div className='ProductChartIcon'>
            <img src={tetherIcon} alt="USDT Icon" width="48px" height="48px" />
            </div>
            <div className='productLeftSide'>
                <div className='ProductChartInfo'>
                    <div className='productChartInfoTop'>
                        <span className='ProductName'>USDT</span>
                        <span className='salesInfo'>Overral sales</span>
                    </div>
                    <div className='productChartInfoBottom'>
                        <div className='ProductPriceInfo'>
                            <span className='ProductAmount'>33.00124</span>
                            <span className='ProductTitle'>USDT</span>
                        </div>
                        <span className='MainProductPrice'>N945,000</span>
                    </div>
                </div>
                <span className='PercentageTag'>+20%</span>
            </div>
        </div>
        <div className='ProductChart'>
            <div className='ProductChartIcon'>
                <img src={cardIcon} alt="Card Icon" width="48px" height="48px" />
            </div>
            <div className='productLeftSide'>
                <div className='ProductChartInfo'>
                    <div className='productChartInfoTop'>
                        <span className='ProductName'>GIFT CARD</span>
                        <span className='salesInfo'>Overral sales</span>
                    </div>
                    <div className='productChartInfoBottom'>
                        <div className='ProductPriceInfo'>
                            <span className='ProductAmount'>N945,000</span>
                        </div>
                    </div>
                </div>
                <span className='PercentageTag'>+20%</span>
            </div>
        </div>
    </div>
  )
}

export default ProductChart
