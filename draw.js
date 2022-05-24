const w = 890;

function setup() {
  let cnv = createCanvas(w, 80);
  cnv.parent('gantt');
  textSize(14);
  fill(255);
  rect(0, 0, w, 50);
}

function puhasta() {
  chosen_algo.textContent = "---";
  ooteaeg.textContent = "--";
  clear();
  fill(255);
  rect(0, 0, w, 50);
}

function drawGantt(values) {
  const colors = ['#bf0008', '#c23100', '#c66d00', '#caac00', '#aece00', '#72d200',
    '#34d500', '#00d90b', '#00dd4d', '#00e192', '#00e5d9', '#00A3E5'];

  clear();
  fill(255);
  rect(0, 0, w, 50);
  fill(0);
  text('0', 0, 70);

  // FIX THIS MESS
  const x1 = map(values[0].arrival, 0, values[values.length - 1].completion, 0, w);
  const n_x1 = map(values[0].completion, 0, values[values.length - 1].completion, 0, w);

  fill(colors[0]);
  rect(x1, 0, n_x1, 50);

  fill(0);
  text(values[0].name, x1 + 6, 30);
  text('0', 0, 70);

  if (values[0].arrival != 0) {
    text(values[0].arrival, x1 - textWidth(values[0].arrival) / 2, 70)
  }

  text(values[0].completion, n_x1 - textWidth(values[0].completion) / 2, 70);

  for (let i = 1; i < values.length; i++) {
    let el = values[i];
    let x = map(el.completion, 0, values[values.length - 1].completion, 0, w);
    let p_x = map(values[i - 1].completion, 0, values[values.length - 1].completion, 0, w);

    fill(colors[i + 1]);
    rect(p_x, 0, x, 50);

    fill(0);
    text(el.name, p_x + 6, 30);

    if (x == w) {
      text(el.completion, x - textWidth(el.completion), 70);
    } else {
      text(el.completion, x - textWidth(el.completion) / 2, 70);
    }
  }
  line(w, 0, w, 50);
} 