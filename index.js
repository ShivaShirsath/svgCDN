const express = require('express');
const app = express();

// Define a route that will send an SVG in text format
app.get('/svg', (req, res) => {
  const svg = `<svg
  xmlns='http://www.w3.org/2000/svg'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  viewBox='0 0 400 50'
  style='background-color: #00000000;'
  width='100%' height='100%'>
  <path id='path0'>
    <animate
      id='d0'
      attributeName='d'
      begin='0s;d0.end'
      dur='5000ms'
      fill='remove'
      values='m0,25 h0 ; m0,25 h400 ; m0,25 h400 ; m0,25 h0'
      keyTimes='0;0.8;0.8;1'
    />
  </path>
  <text
    font-family='"monospace", monospace'
    fill='#FFAA44'
    font-size='25'
    dominant-baseline='middle'
    x='50%'
    text-anchor='middle'>
    <textPath xlink:href='#path0'>
            𝙷𝚒 𝚝𝚑𝚎𝚛𝚎, 𝙸&#039;𝚖 𝚂𝚑𝚒𝚟𝚊 👋
    </textPath>
  </text>
</svg>`;
  res.set('Content-Type', 'image/svg+xml');
  res.send(svg);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
