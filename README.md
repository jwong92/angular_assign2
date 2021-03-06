# Assignment2

## Project Description
This is a an assignment for the Web Development web_trends class, and will use Typescript and Angular 2. This project will be divided into 3 separate parts.

### Part 1
We will focus on creating models, components and views. Individually creating the 3 aformentioned files, we will then combine them into one index file.

#### Jessica Wong
Created component __j-weather__, service __j-weather.service__ and model __j-weather__. Within the model, there is a class for JWeather with the following structure:

```
export class JWeather {
    id: number;
    day: string; 
    feels: [number, string];
    pop: [number, string];
    wind: [number, string];
    today: boolean;
}
```

If the day is today, the background will highlight to a specific color

#### Andrei Navumau
Created component __weatherlist__, service __andweather.service__ and model __andweather__. Within the model, extended class JWeather and added extra properties. Apart from 'number' and 'string' data types used 'tuple' and 'boolean'.
The page shows a table with weather data, where each row is a separate day of the week. The current day has bold text in the table.
Added search functionality, so that user can filter days, searching by name (case insensitive).


## Collaborators

__Andrei Navumau__
@tyzia

__Jessica Wong__
@jwong92

## Project Ideas

1. Weather forecast SPA. We can display: temperature, wind, POP, clouds/sun/rain images. We can have filters for cities and dates.

2. Sportsmen profiles SPA. We can display: person's image, full name, country, type of sport, medals / achievements. We can have filters for types of sport, countries.

