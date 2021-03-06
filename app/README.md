# Dash

> A web app to sync time entries from Harvest to Google sheets

<p align="center"><img src="https://raw.githubusercontent.com/dominikwilkowski/harvest2sheet/released/app/assets/harvest2sheet.png" alt="Harvest2Sheet logo"></p>

## Features

- Create multiple sheets
- Auto-generating new tabs
- Create multiple output column profiles
- Import and export your setup
- All credentials stored inside local storage
- No server needed

## Login

To login you require to create a [Personal Access Token via Harvest](https://id.getharvest.com/developers).
You also require a Google API key which is specific to this app.

## Run locally

To run locally install all dependencies via `yarn` and run:

```sh
yarn start
```

This will open a new browser window.

## Deploy

To deploy this app you run:

```sh
yarn deploy
```

This will deploy this app into the `gh-pages` branch of this repo and push.

## Release History

- 1.6.0 - Updated to React 17 and Emotion 11
- 1.5.1 - Fixed summary sheet `ROUND` to `ROUNDUP`
- 1.5.0 - Added two additional rows to summary sheet
- 1.4.0 - Added sorting, default date to five days in the past, date format changes, summary table more useful
- 1.3.0 - Added ability to add summary tab to sheet
- 1.2.1 - Added support for more than 100 time entries from harvest
- 1.2.0 - Added select all, avatar and harvest client ID support
- 1.1.0 - Added multiple output profiles and import/export
- 1.0.0 - Launch

# };
