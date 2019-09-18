import './css/App.scss';

class App {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    console.log("Hello, " + this.greeting);
    return "Hello, " + this.greeting;
  }
  
}

export default App;