export class UserModal {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  password: number;
  telephone: number;
  photo: string ;
  constructor(id: number, firstname: string, lastname: string, username: string, password: number, telephone: number, photo: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.telephone = telephone;
    this.photo = photo;
  }
}
