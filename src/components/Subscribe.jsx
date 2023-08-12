import React, { useEffect, useState } from 'react'
import '../styles/subscribe.css'
import { TimerOutline } from 'react-ionicons'


const Option = ({months, total, perMonth, idx, marked, handleClick}) => {

    return <div className={`option ${marked === idx && 'selected'} ${idx === 0 && 'disabled'}`}>
        <span className={`small ${idx === 0 ? 'expired' : 'hidden'}`}>offer expired</span>
        <input
        type="radio" 
        id={`opt${idx}`} 
        value={idx} 
        name="radios"
        checked={marked === idx}
        onChange={() => handleClick(idx)}
        disabled={idx === 0}
        />
        <label className='label' htmlFor={`opt${idx}`}>
          <span className='smaller bolder'>{ months } Months Subscription</span>
          <div className="option-right-part smaller">
            <span>Total: <span className='bolder'>&#8377;{total}</span></span>
            <span className='small'><span className='bolder'>&#8377;{perMonth}</span> /mo</span>
          </div>
        </label>

    </div>
}


const Subscribe = () => {

  const prices = [[12, 99, 8], [12, 179, 15], [6, 149, 25], [3, 99, 33]];

  const [marked, setMarked] = useState(1);

  const handleClick = (idx) => {
    setMarked(idx);
  }


  return (
    <div className='main-card'>
      <div className="upper">
        <div className="bucket">
            <div className='circle'>1</div>
            <span className='smaller'>Sign Up</span>
        </div>
        <div className="bucket">
            <div className='circle'>2</div>
            <span className='smaller'>Subscribe</span>
        </div>
      </div>

    <h2 className='heading'>Select Subscription Plan</h2>
    <div className="option-container">
        {
          prices.map((price, idx) => <Option
          key={idx} 
          months={price[0]} 
          total={price[1]} 
          perMonth={price[2]} 
          idx={idx}
          marked={marked}
          handleClick={handleClick}
          />)
        }
        
        <div className="line" />

        <div className="subs-fee">
          <span className='smaller'>Subscription Fee</span>
          <span className='smaller'>&#8377;18500</span>
        </div>
        
        <div className="option limited-time-offer">
          <div className='offer-bucket'>
            <div>
              <span className='smaller bolder'>Limited Time Offer</span>
              <div className='icon-bucket'>

                <TimerOutline
                  color={'#ff6060'} 
                  title={'time'}
                  height="20px"
                  width="20px"
                />

                <span className='small down'>Offer Valid till 25th March</span>

              </div>
            </div>
            <span className='smaller'>-&#8377; {18500 - prices[marked][1]}</span>
          </div>
        </div>

        <div className="subs-fee">
          <span className='smaller'>Total (incl. 18% GST)</span>
          <span className='bolder'>&#8377;{prices[marked][1]}</span>
        </div>

        <div className="button-bucket">
          <button className='btn green-btn'>Proceed</button>
          <button className='btn white-btn'>Cancel</button>
        </div>

    </div>
    </div>
  )
}

export default Subscribe
