import React, { ReactElement, useState } from 'react';
import arrowActive from '../../assets/images/icons/chevron-left-active.png';
import arrowDisabled from '../../assets/images/icons/chevron-left-disabled.png';
import { COUNT_CARDS_WEB, COUNT_CARDS_MOBILE, COUNT_WEATHER_CARDS_ALL } from '../../common/components/constants';
import WeatherCard from '../WeatherCard/WeatherCard';
import { IWeatherDetails } from '../../common/interfaces/interfaces';
import ErrorBlockSection from '../ErrorBlockSection/ErrorBlockSection';

interface IProps {
  weatherData: Array<IWeatherDetails> | []
}

const Slider: React.FC<IProps> = ({ weatherData }) => {
  const [currentStartItem, setCurrentStartItem] = useState<number>(0);
  const minResolurion = 660;
  const COUNT_CARD = window.screen.availWidth > minResolurion ? COUNT_CARDS_WEB : COUNT_CARDS_MOBILE;
  const maxUpdateCardCurent = COUNT_WEATHER_CARDS_ALL - COUNT_CARD;

  const handleClickPrev = (): void => {
    if (currentStartItem !== 0) {
      setCurrentStartItem(currentStartItem - 1);
    }
  };

  const handleClickNext = (): void => {
    if (currentStartItem !== maxUpdateCardCurent) {
      setCurrentStartItem(currentStartItem + 1);
    }
  };

  const getCardsList = (currentStart: number): ReactElement[] => {
    const listOfWeatherCards: ReactElement[] = [];
    const endCardIdx: number = currentStartItem + COUNT_CARD;

    for (let i = currentStart; i < endCardIdx; i++) {
      const dayData: IWeatherDetails = weatherData[i];
      listOfWeatherCards.push(<WeatherCard key={i} dayData={dayData} />);
    }

    return listOfWeatherCards;
  };

  if (weatherData.length !== 0) {
    return (
      <div className='slider-container'>
        <div className="slider-container__btn">
          <img className='slider-container__btn_prev' src={currentStartItem !== 0 ? arrowActive : arrowDisabled} alt='slider-arrow' onClick={handleClickPrev} />
        </div>
        <div className='slider-container__card-list'>
          {getCardsList(currentStartItem)}
        </div>
        <div className="slider-container__btn">
          <img className='slider-container__btn_next' src={currentStartItem !== maxUpdateCardCurent ? arrowActive : arrowDisabled} alt='slider-arrow' onClick={handleClickNext} />
        </div>
      </div>
    );
  } else {
    return <ErrorBlockSection errorText={'There are no items. Please try again.'} />;
  }
};

export default Slider;
