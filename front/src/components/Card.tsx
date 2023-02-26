import { Slot } from "../models/Memory";
import classes from "./card.module.css";
import back from './../images/back.jpg';

const Card: React.FC<{slot: Slot, frozen: boolean, onChosen: (id:number) => void }> = (props) => {
    const {slot, frozen, onChosen} = props; 
    const src = slot.isVisible ? slot.card.src : back;
    const alt = `${slot.card.name}-${slot.card.version}`;

    const onCardChosen = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault();
        onChosen(slot.card.id);
    };
    

    let img: JSX.Element|null;
    if (slot.isWon || frozen) {
        img = <img src={src} alt={alt} className={classes["was-won"]} />;
    } else {
        img =  <img src={src} onClick={onCardChosen} alt={alt}/>;
    }
        
    return (
        <div className={classes["card-display"]}>{img}</div>
    )
}

export default Card;