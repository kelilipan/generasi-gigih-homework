# Sepotify - Create Playlist

This is my final project submission for [#GenerasiGigih](https://sites.google.com/anakbangsabisa.org/generasigigih-landingpage/home?authuser=1)

<p align="center">
  <img src="/docs/image/ss.png" alt='preview'>
</p>

<p align="center">
Create spotify playlist app. 
</p>

[Live preview.](https://gg.wisesa.dev/)

## Features

- 🔉 Built-in web player (only works for premium spotify user)
- 🛠 PWA
- 📐 It's responsive
- 😎 It has 💯 cool transition™ 💯
- ✨ etc.

## Built Using

- [Create React App](https://create-react-app.dev/) to initialize the project.
- [Chakra-ui ⚡](https://chakra-ui.com/docs/getting-started) for layout & styling.
- [Framer/motion](https://www.framer.com/motion/) for transition animation stuff.
- [Jest](https://jestjs.io/) & [react testing-library](https://testing-library.com/) for testing.
- [React redux](https://react-redux.js.org/) for state management.
- Written in [typescript](https://typescriptlang.org).
- [Hosted on Vercel 🚀](https://vercel.com/).

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_BASE_URL` used for grant flow callback.

`REACT_APP_SPOTIFY_CLIENT_SECRET` your spotify developer client secret.

`REACT_APP_SPOTIFY_CLIENT_ID` your spotify developer client id.

see [.env.example](/.env.example)

## Run Locally

Clone the project

```bash
  git clone https://github.com/svspicious/generasi-gigih-homework
```

Go to the project directory

```bash
  cd generasi-gigih-homework
```

Install dependencies

```bash
  yarn
```

Start the server (but you need to [setup .env](#environment-variables) first)

```bash
  yarn start
```

Open http://localhost:3000 with your browser to see the result.

## Feedback

Any feedback is welcome, you can sumbit issues/feedback [here](https://github.com/svspicious/generasi-gigih-homework/issues).

## License

Licensed under [MIT License, Copyright (c) 2021 Wisesa](./LICENSE)
