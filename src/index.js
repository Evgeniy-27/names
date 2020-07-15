export default class Validator {
  validateUsername(name) {
    this.name = name;
    return (/^[A-Za-z][A-Za-z0-9\-_]+/.test(this.name))
      && (/[a-zA-Z]$/.test(this.name))
      && (!/[0-9]{4}/.test(this.name));
  }
}
