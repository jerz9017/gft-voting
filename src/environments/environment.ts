// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDFop9a_oGJsWj299wO4pQJEKBTZ4Oq-iI",
    authDomain: "gft-voting.firebaseapp.com",
    databaseURL: "https://gft-voting.firebaseio.com",
    projectId: "gft-voting",
    storageBucket: "",
    messagingSenderId: "908136000880"
  }
};
