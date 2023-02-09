# StarWarsInfo-firebase

StarWarsInfo-firebase is a page where you can check info about "Star Wars" movies and characters. You can express your feelings about movies in comments section too. Data is from swapi.dev, comments are saved in firebase. Inspration for doing this project is [this simple task](https://github.com/matluniewski/task). App is build in Next with TypeScript. See here how it looks:
[starwarsinfo.vercel.app](https://starwarsinfo.vercel.app/)

If 500 error is thrown - you have to try again later, sometimes API is really slow, and vercel throws timeout error. Sorry for that.

## Technologies

```typescript
"next": "12.3.1",
"react": "18.2.0",
"typescript": "^4.8.3"
"tailwindcss": "^3.2.4",
"axios": "^1.1.3",
"firebase": "^9.14.0",
"@emotion/react": "^11.10.5",
"@emotion/styled": "^11.10.5",
"@hookform/resolvers": "^2.9.10",
"@mui/icons-material": "^5.11.0",
"@mui/material": "^5.10.14",
"react-firebase-hooks": "^5.1.1",
"react-hook-form": "^7.39.7",
"ts-jest": "^29.0.5",
```

## Installation

If you want to reproduce this project in your code editor

```bash
git clone https://github.com/jkielbaska/StarWarsInfo-firebase.git
cd ./StarWarsInfo-firebase
npm install
npm run dev
```

but if you just want to see how this looks [click here](https://starwarsinfo.vercel.app/)

## URLs

- [starwarsinfo.vercel.app/](https://starwarsinfo.vercel.app/) - Main page. You can click "films" or "characters" here.

On every subpage, if you want to come back to your last step - click "go back", if you want to go to main page, click "StarWarsInfo". You can also click on breadcrumb menu.

- [films](https://starwarsinfo.vercel.app/films) - Click one of "cards" to be transfered to films[id] subpage
- [films/[id]](https://starwarsinfo.vercel.app/films/1) - Cover, title, opening crawl, character list (you can click on characters name to be transfered to character subpage) and comments section.
- [characters](https://starwarsinfo.vercel.app/characters) - Click one of "cards" to be transfered to characters[id]. Pagination buttons are in bottom section of page. 10 characters are displayed on every page.
- [characters/[id]](https://starwarsinfo.vercel.app/characters/1) - Character photo, name, basic data and links to movies subpages that character was in.

## TODO

&check; Add breadcrumbs menu

&check; Add comments section for films[id] using firebase

&check; Add charcters pagination

&check; Add stormtrooper 3D spinning animation on main page

&check; Improve page responsibility (add onhover, media-queries, responsive fonts)

&check; Add page loaders

&check; Add tests using Jest, react-testing-library and e2e tests using Cypress.io

&cross; Improve error handling

&cross; Add notification after adding comment

## Contributing

Pull requests are welcome. For major changes, you can open an issue to discuss what you would like to change.
