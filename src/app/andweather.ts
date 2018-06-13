import {JWeather} from './j-weather';

export class Andweather extends JWeather {
    date: string;
    descr: string;
    temp: [number, string];
    gust: number;
    sun: number;
    // private _windadv: [number, string]; // this is tuple property type


    // getWind(): [number, string] {
    //     return this._windadv;
    // }
}
