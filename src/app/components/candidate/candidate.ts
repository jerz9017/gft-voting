export class Candidate {
  id: string;
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

  constructor(id: string, name: string, party: string, age: number, photoUrl: string) {
    this.id = id;
    this.name = name;
    this.party = party;
    this.age = age;
    this.photoUrl = photoUrl;
  }

  toggle() {
    this.hide = !this.hide;
  }
}
