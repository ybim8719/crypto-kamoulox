import bear from './../images/bear.jpg';
import rabbit from './../images/rabbit.jpg';
import cats from './../images/cats.jpg';
import fox from './../images/fox.jpg';
import pig from './../images/pig.jpg';
import panda from './../images/pandar.jpg';
import { CardType } from '../models/Memory';

export const cardsInARow = 4;

export const animalsDataSet: CardType[] = [
    { id: 1, name: "pig", version: 1, src: pig},
    { id: 2, name: "pig", version: 2, src: pig},
    { id: 3, name: "fox", version: 1, src: fox},
    { id: 4, name: "fox", version: 2, src: fox},
    { id: 5, name: "panda", version: 1, src: panda},
    { id: 6, name: "panda", version: 2, src: panda},
    { id: 7, name: "cats", version: 1, src: cats},
    { id: 8, name: "cats", version: 2, src: cats},
    { id: 9, name: "rabbit", version: 1, src: rabbit},
    { id: 10, name: "rabbit", version: 2, src: rabbit},
    { id: 11, name: "bear", version: 1, src: bear},
    { id: 12, name: "bear", version: 2, src: bear},
];
