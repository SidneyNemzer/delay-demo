# Delay Demo

This shows how the delay in a react-chrome-redux store confuses react-ace when autocompleting in the editor.

It also demonstrates a work-around.

## Install

```bash
git clone https://github.com/sidneynemzer/delay-demo
cd delay-demo
npm i
```

## Usage

This demo has two examples:

### Simulated delay

Delay is introduced to a vanilla redux store, to reproduce the issue.

The delay can be turned off, to see that a vanilla redux store with react-ace works as expected.

#### To view this demo

1. `npm start`
2. Navigate to http://localhost:8080/html/test.html in a web browser

### Real delay

A redux store wrapped with react-chrome-redux is used to demonstrate the issue.

#### To view this demo

1. `npm run build`
2. In Chrome, navigate to [chrome://extensions](chrome://extensions)
3. Enable Developer Mode
4. Load the `build` folder using "Load unpacked extension..."
5. Open a new Devtools window
6. Open the "Demo" tab

(You can open multiple Devtool windows to see the syncing in action)
