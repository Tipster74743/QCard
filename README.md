This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTutorial tutorial
```

Then, to run it, cd into `myTutorial` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

# Temp

This project was generated with [Ionic](https://ionicframework.com/getting-started/)

## Development server

Run `ionic serve` for a dev server. Navigate to `http://localhost:8100`. The app will automatically reload if you change any of the source files.

## Build
Run

```
ionic cordova run android --prod --release
```

# or

```
ionic cordova build android --prod --release
```

## Running on Mobile

Run a production build of your app with `ionic cordova build ios --prod`
Open the .xcodeproj file in platforms/ios/ in Xcode
Connect your phone via USB and select it as the run target
Click the play button in Xcode to try to run your app

