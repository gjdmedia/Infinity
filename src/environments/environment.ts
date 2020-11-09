// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDzXROVL0ql6_SjloAmaU_a4M-bijJI5h4",
    authDomain: "infinity-generator-a8f32.firebaseapp.com",
    databaseURL: "https://infinity-generator-a8f32.firebaseio.com",
    projectId: "infinity-generator-a8f32",
    storageBucket: "infinity-generator-a8f32.appspot.com",
    messagingSenderId: "728926959507",
    appId: "1:728926959507:web:a5c8f02c4344f2eae59a66",
    measurementId: "G-SFNL15EPF8"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
