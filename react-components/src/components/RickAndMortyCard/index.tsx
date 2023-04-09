import { useState } from 'react';
import IRickAndMortyCard from '../../types/IRickAndMortyCard';
import ModalWindow from '../ModalWindow';
import style from './RickAndMortyCard.module.css';

type IDataFromApi = Array<IRickAndMortyCard>;

type IProps = {
  DataFromApi: IDataFromApi;
};
// type IProps = {
//   DataFromApi: IRickAndMortyCard;
// };

const RickAndMortyCard = (props: IProps) => {
  const [clickedCard, setClickedCard] = useState<IRickAndMortyCard[]>();
  const [modalActive, setModalActive] = useState<boolean>(false);
  const propsData = props.DataFromApi;

  const ModalClickHandler = (itemId: string) => {
    setModalActive(true);
    const currentCardData = propsData.filter((item) => item.id == itemId);
    setClickedCard(currentCardData);
    // console.log(clickedCard);
  };

  return (
    <>
      <div className={style.cards_area}>
        {propsData.map((item) => {
          return (
            <div
              className={style.wrapper}
              key={item.id}
              onClick={() => ModalClickHandler(`${item.id}`)}
            >
              <div>
                <img className={style.card_image} src={item.image}></img>
              </div>
              <div>{item.name}</div>
              <div className={style.species_label}>{item.species}</div>
            </div>
          );
        })}
      </div>
      <ModalWindow active={modalActive} setActive={setModalActive} selectedCard={clickedCard} />
    </>
  );
  // }
};

export default RickAndMortyCard;
