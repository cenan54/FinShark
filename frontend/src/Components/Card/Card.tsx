import React from 'react';
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card:React.FC<Props> = ({companyName, ticker, price}: Props) : JSX.Element => {
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <div className='details'>
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>

        </div>
        <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!</p>
    </div>
  )
}

export default Card