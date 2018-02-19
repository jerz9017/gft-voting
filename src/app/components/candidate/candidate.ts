export class Candidate {
  name: string;
  party: string;
  age: number;
  photoUrl: string;
  hide: boolean = true;
  proposals: Array<object> = [
    {desc: 'Bla1'},
    {desc: 'Bla2'},
    {desc: 'Bla3'}
  ];

  constructor(name: string, party: string, age: number, photoUrl: string) {
    this.name = name;
    this.party = party;
    this.age = age;
    this.photoUrl = photoUrl;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
