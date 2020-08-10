// declare var data: any;

export const environment = {
  production: true,
  
  firebaseConfig: {
    apiKey: "AIzaSyAIPm1-3kQSsSRqABNbjlhaYainfunwvWk",
    authDomain: "trello-67cda.firebaseapp.com",
    databaseURL: "https://trello-67cda.firebaseio.com",
    projectId: "trello-67cda",
    storageBucket: "trello-67cda.appspot.com",
    messagingSenderId: "870308370206",
    appId: "1:870308370206:web:5730fca22bfe3daf1f9b0f",
    measurementId: "G-SBT0NREHTD"
  },


  // Servicios de trello
  getListBoard: 'https://api.trello.com/' + '/1/members/me/boards?key=0d2103282aa6a0a4ee9eb5f71d4f5424&token=55c59307d7b366ba8bca4049518eeef5fab1aa239bbf9b375872bcbebedd25e2',
  searchBoard: 'https://api.trello.com/' + '/1/search?key=0d2103282aa6a0a4ee9eb5f71d4f5424&token=55c59307d7b366ba8bca4049518eeef5fab1aa239bbf9b375872bcbebedd25e2&query='

};
