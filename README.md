# Marvel Superheroes

I'm building this simple React Redux application as a way to learn and understand how React and Redux work. As I'm a bit of a nerd I thought building an about superheroes is a fun way to learn these new skills.

The whole idea behind this app is to make a combination of superhero comics and their related movie counterparts to fuse them together you can compare it to combining IMDB with a superheroes wikipedia.

In this initial fase I'll only be building a simplified version of Marvel Superheroes website using the Marvel API http://developer.marvel.com/

Per day only 3000 API calls can be made to Marvel Comics API.

## Installation

```bash
npm install
npm start
open http://localhost:3000
```
## Dependencies

```bash
React
Redux
React-Redux
Redux-Thunk
```

## How it works

Through the use of Redux Thunk we return functions from the Action Creators which will make API calls to retrieve data from Marvel's API.

------------------

Simplified version of [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate) for the
traineeship program.
