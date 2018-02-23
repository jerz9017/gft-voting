# GftVoting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

This project relies on Cloud Firestore NoSQL database to work. The initial schema follows the next pattern (in JSON):

```json
{
  "candidates": {
    "efe6d47a-9bdb-4c52-a8d8-92fcca13dcfb": {
      "name": "Elon Musk",
      "age": 46,
      "party": "Space X - Tesla, Inc. - Neuralink",
      "photoURL": "https://ei.marketwatch.com/Multimedia/2017/05/24/Photos/ZH/MW-FN186_musk_0_20170524133537_ZH.jpg?uuid=665eca18-40a7-11e7-a789-9c8e992d421e"
    },
    "046cb09b-5497-46fd-ba0e-d8dec65bf610": {
      "name": "Leia Organa",
      "age": 60,
      "party": "Rebel Alliance",
      "photoURL": "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2016/12/28/Pictures/_d1fcf8ca-cca9-11e6-b3cb-dcd306bf19b8.jpg"
    },
    "405d7b83-a096-4109-9b77-76fdfa750ce6": {
      "name": "Doctor Emmett Brown",
      "age": 100,
      "party": "DeLorean Time Machine, Inc.",
      "photoURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_9M6UYIFHrNCGPe0Ixp312uaa_nFFT4qKgVRVv7jn37VmJjc"
    }
  }
}
```

Eventually, both "users" and "votes" collections will be added to the schema as well.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
