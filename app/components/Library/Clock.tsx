export default class Clock {
  getTime() {
    const now = new Date();
    return now.toLocaleTimeString();
  }
}
