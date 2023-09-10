const express = require('express');
const app = express();

// Define a route that will send an SVG in text format
app.get('/', (req, res) => {
  const newLine = req.query.line || "";
  const name = req.query.name || "Shiva";
  const color = req.query.color || "FFAA44";
  const emoji = req.query.emoji || "👋";
  const full = req.query.full || `Hi there, I&#039;m ${name} ${emoji}`;
  const size = req.query.size || 25;
  const bg = req.query.bg || '00000000';
  const delay = req.query.delay || 5000;
  const bold = req.query.bold || 900;
  const svg = req.query.svg || `<svg
  xmlns='http://www.w3.org/2000/svg'
  xmlns:xlink='http://www.w3.org/1999/xlink'
  viewBox='0 0 400 50'
  style='background-color: #${bg};'
  width='100%' height='100%'>
  <path id='path0'>
    <animate
      id='d0'
      attributeName='d'
      begin='0s;d0.end'
      dur='${delay}ms'
      fill='remove'
      values='m0,25 h0 ; m0,25 h400 ; m0,25 h400 ; m0,25 h0'
      keyTimes='0;0.8;0.8;1'
    />
  </path>
<path id='path1'>
    <animate
    attributeName="opacity"
    begin="0s; d0.end"
    dur="1s"
    repeatCount="indefinite"
    values="1;0;1"
    keyTimes="0;0.5;1"
  />
  </path>
  <text
    font-family='"Courier New", monospace'
    font-weight='${bold}'
    fill='#${color}'
    font-size='${size}'
    dominant-baseline='middle'
    x='50%'
    text-anchor='middle'>
    <textPath xlink:href='#path0'>
      ${full}
    </textPath>
    <textPath xlink:href='#path1'>
      ${newLine}
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
