// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../style/Home.css'
import downimg from '../src/assets/pattern-divider-desktop.svg';
import diceLogo from '../src/assets/icon-dice.svg';

const Home = () => {
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState(null);
  
    const fetchAdvice = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
    };
    useEffect(() => {
        fetchAdvice();
      }, []);
  return (
    <>
      <div className='generator-ID'>
        <div className='Main-box'>
            {adviceId && <p className='text-success card-text'> ADVICE #{adviceId} </p>}
          <p className='Text'> {advice}</p>
          <img className='Line' src={downimg} alt="divider" />
          <button className='Button' onClick={fetchAdvice}>
            <img src={diceLogo} alt='dice' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;