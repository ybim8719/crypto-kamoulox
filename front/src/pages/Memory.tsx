import { useEffect, useState } from 'react';
import classes from './Memory.module.css';
import Card from '../components/Card';
import { Slots, CardType } from './../models/Memory';
import { animalsDataSet, cardsInARow  } from '../lib/memory-dataset';

const Memory: React.FC = () => {
    const [slots, setSlots] = useState<Slots>([]);
    const [returnedCard1, setReturnedCard1] = useState<CardType | null>();
    const [returnedCard2, setReturnedCard2] = useState<CardType | null>();
    const [score, setScore] = useState<number>(0);
    const [foundCards, setFoundCards] = useState<number>(0);
    const [freezeClick, setFreezeClick] = useState<boolean>(false);

    useEffect(() => {
        restartGame();
    }, []);

    useEffect(() => {
        if (foundCards === animalsDataSet.length) {
            console.log('GAGNé!!!! Votre score est de ' + score + " pts.")
        }
    }, [foundCards])

    useEffect(() => {
        setTimeout(() => {
            checkIfIsPair();
        }, 1000)
    }, [returnedCard2]);

    const shuffleArray = (arr: CardType[]) => {
        return arr.sort(() => .5 - Math.random());
    }

    const restartGame = () => {
        const underOrderedCards = shuffleArray(animalsDataSet);
        const slots = underOrderedCards.map((el) => {
            return {
                card: el,
                isVisible: false,
                isWon: false,
            };
        })
        setSlots(slots);
        setReturnedCard1(null);
        setReturnedCard2(null);
        setScore(0);
        setFreezeClick(false);
    }

    // compare les 2 cartes retournées
    const checkIfIsPair = () => {
        if (returnedCard2 && returnedCard1) {
            if (
                (returnedCard2.name === returnedCard1.name) &&
                (returnedCard2.version !== returnedCard1.version) 
            ) {
                // => C GAGNE ! is won pour les 2, elles restent face ouvertes. => + 2 au nb de cartes gagnées
                [returnedCard2.id, returnedCard1.id].forEach(cardId => setHasWonInSlots(cardId));
                setFoundCards(prevNb => prevNb + 2);
                setScore(prevNb => prevNb + 100);
                setReturnedCard1(null);
                setReturnedCard2(null);
            } else {
                // perdu => on remet les cartes en jeu face cachée
                setScore(prevNb => prevNb - 20);
                setReturnedCard1(null);
                setReturnedCard2(null);
                [returnedCard2.id, returnedCard1.id].forEach(cardId => setIsVisibleStatusOfSlots(false, cardId));
            }
        }
        setFreezeClick(false);
    }

    // handler au click sur 1 carte
    const returnCardHandler: (id: number) => void = (id) => {
        // empêche le click multiple
        setFreezeClick(true);
        const currentSlot = slots.find((el) => el.card.id === id);
        const returnedCard = currentSlot?.card;
        if (returnedCard) {
            if (!returnedCard1) {
                // pas de 1ere carte retournée. On la met de côté et la rend visible
                setReturnedCard1(returnedCard);
                setIsVisibleStatusOfSlots(true, id);
                setFreezeClick(false);
            } else {
                if (returnedCard.id === returnedCard1.id) {
                    // if la carte retournée est la même que la précédente // on la remet en jeu face cachée
                    setIsVisibleStatusOfSlots(false, id);
                    setReturnedCard1(null);     
                    setFreezeClick(false);       
                } else {
                    setIsVisibleStatusOfSlots(true, id);                
                    setReturnedCard2(returnedCard);
                }
            }
        } else {
            throw new Error('STOP HACKING THE GAME!!!');
        }     
    }

    const setIsVisibleStatusOfSlots = (isVisible: boolean, id:number ) => {
        setSlots((prevSlots) => {
            const index = prevSlots.findIndex((el) => el.card.id === id);
            const updatedSlot = {...prevSlots[index]}
            updatedSlot.isVisible = isVisible;
            prevSlots[index] = updatedSlot;

            return prevSlots;
        })
    }

    const setHasWonInSlots = (id:number) => {
        setSlots((prevSlots) => {
            const index = prevSlots.findIndex((el) => el.card.id === id);
            const updatedSlot = {...prevSlots[index]}
            updatedSlot.isWon = true;
            prevSlots[index] = updatedSlot;

            return prevSlots;
        })
    }

    // DISPLAY JSX
    let display: JSX.Element | JSX.Element[]= <p>RIEN</p>
    if (slots.length > 0) {
        let rows: JSX.Element[][]| [] = [];
        for (let i = 0; i < slots.length; i++) {
            const currentRowIndex = Math.floor(i/cardsInARow);
            if (rows[currentRowIndex] === undefined) {
                rows[currentRowIndex] = [];
            }
            rows[currentRowIndex].push(<Card frozen={freezeClick} key={`${slots[i].card.name}-${slots[i].card.version}`} onChosen={returnCardHandler} slot={slots[i]}/>)
        }
        // wrap rows in flex div
        display = rows.map((row,index)=> {
            return <div className={classes.slotsRow} key={index}>{row}</div>
        })
    }

    return (
        <div>
            <h1>Memory</h1>
            <p>Instructions : Faites des paires</p>
            <p>Nb de cartes gagnées : {foundCards}</p>
            <p>Votre score : {score}</p>
            <div className={classes.playground}>
                {display}
            </div>
        </div>
    )
}

export default Memory;