import IRickAndMortyCard from '../../types/IRickAndMortyCard';
import style from './ModalWindow.module.css';

// type IEpisode = {
//   air_date: string;
//   // characters: string[];
//   created: string;
//   episode: string;
//   id: string;
//   name: string;
//   url: string;
// };

const ModalWindow = ({
  active,
  setActive,
  selectedCard,
}: {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCard: IRickAndMortyCard[] | undefined;
}) => {
  let charDate: Date | undefined;
  if (selectedCard?.[0].created) {
    charDate = new Date(selectedCard[0].created);
  }

  return (
    <div
      className={active ? `${style.modal_window} ${style.active}` : `${style.modal_window}`}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${style.content} ${style.active}` : `${style.content}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.close} onClick={() => setActive(false)}>
          close
        </div>
        {selectedCard?.[0] && (
          <div className={style.giant_card}>
            <div style={{ textAlign: 'center' }}>
              <img src={selectedCard[0].image} style={{ borderRadius: '10px' }}></img>
              <div>{selectedCard[0].name.toUpperCase()}</div>
            </div>
            <div>Created in {charDate?.toString().slice(10, 15)}</div>
            <div>Appears in {selectedCard[0].episode.length} episodes</div>
            <div>Status: {selectedCard[0].status} </div>
            <div>Gender: {selectedCard[0].gender} </div>
            <div>Origin: {selectedCard[0].origin.name} </div>
            <div>location: {selectedCard[0].location.name} </div>
            {selectedCard[0].type !== '' && <div>Type: {selectedCard[0].type} </div>}
            <div>Species: {selectedCard[0].species} </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
