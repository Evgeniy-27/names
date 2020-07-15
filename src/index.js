export default class Validator {
  validateUsername(name) {
    this.name = name;
    return (/[A-Za-z0-9\-_]+/.exec(this.name) !== -1)
        && (!/^[A-Za-z][0-9]{3}[a-zA-Z]$/.exec(this.name) !== -1);
  }
}
