// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

let fireBaseConfig = {
    apiKey: "AIzaSyDk8HF_stwFVdwb05HT0izu3iMqL_291bI",
    authDomain: "cloudmessage-3644b.firebaseapp.com",
    databaseURL: "https://cloudmessage-3644b.firebaseio.com",
    projectId: "cloudmessage-3644b",
    storageBucket: "",
    messagingSenderId: "652503232662"
};
export const environment = {
    production: false,
    fireConfig : fireBaseConfig,

};