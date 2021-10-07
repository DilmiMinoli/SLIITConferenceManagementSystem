import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Speakers() {
  return (
    <div className='cards'>
      <h1>KEY NOTE SPEAKERS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='https://tse1.mm.bing.net/th?id=OIP.O0R3Og68szi5PshHKAyBNQAAAA&pid=Api&P=0&w=300&h=300'
              text='Dr Lalith Gamage'
              
              path='/'
            />
            <CardItem
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOVvJ_1CWtU1vkhXcd_-4lmkcNYSN7UoTSvp0kTfoTMKwEgxy-Wbgg9VdLp8YbQuASoKk&usqp=CAU'
               text='Dr prashan de silva'
              
              path='/'
            />
            <CardItem
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFap79VBogjCFgCVe1sSTJQ7L2VxJCXdebg&usqp=CAU'
             text="Dr Amara upuldenia"
              
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Speakers;