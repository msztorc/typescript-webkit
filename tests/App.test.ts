import App from '../src/App';

it('renders without crashing', () => {
  new App('World');
});

it('check Hello World', () => {
  let app = new App('World');
  expect(app.greet()).toBe('Hello, World');
});