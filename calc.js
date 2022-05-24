const chosen_algo = document.getElementById('chosen_algo');
const ooteaeg = document.getElementById('ooteaeg');

function getInput() {
  return document.getElementById('järjend').elements['järjend'].value.split(';');
}

function fcfs() {
  chosen_algo.textContent = "FCFS";
  const inp = getInput();
  let tasks = [];

  let comp = parseFloat(inp[0].split(',')[1]) + parseFloat(inp[0].split(',')[0]);

  for (let i = 0; i < inp.length; i++) {
    let inp0 = parseFloat(inp[i].split(',')[0]);
    let inp1 = parseFloat(inp[i].split(',')[1]);

    comp += i > 0 ? inp1 : 0; // ??? start with 0 or with the first time unit what???

    tasks.push({
      arrival: inp0, // Time of arrival
      burst: inp1, // Time to complete the task
      completion: comp, // 
      turnaround: (comp - inp0) < 0 ? 0 : comp - inp0, // Total time taken by the process between starting and the completion
      waiting: ((comp - inp0) - inp1) < 0 ? 0 : (comp - inp0) - inp1, // Time for which process is ready to run but not executed by CPU scheduler
      name: 'P' + (i + 1)
    });


  }

  console.log(tasks);

  let kesk = 0;
  for (const el of tasks) {
    kesk += el.waiting;
  }
  ooteaeg.textContent = (kesk / inp.length).toFixed(1);
  drawGantt(tasks);
}

function srtf() {
  chosen_algo.textContent = "SRTF";
  const inp = getInput();
  let tasks = [];
  let queue = [];

  let comp = parseFloat(inp[0].split(',')[1]) + parseFloat(inp[0].split(',')[0]);

  // Algorithm
  for (let i = 0; i < inp.length; i++) {
    let inp0 = parseFloat(inp[i].split(',')[0]);
    let inp1 = parseFloat(inp[i].split(',')[1]);

    if (inp1 > 4) { // ajakvandi pikkus 4
      // add to queue
    }

    comp += i > 0 ? inp1 : 0;

    tasks.push({
      arrival: i,    // Time of arrival
      burst: inp1,      // Time to complete the task
      completion: comp, // 
      turnaround: 0, // Total time taken by the process between starting and the completion
      waiting: 0,    // Time for which process is ready to run but not executed by CPU scheduler
      name: 'P' + (i + 1)
    });

  }

  let kesk = 0; // Average time
  for (const el of tasks) {
    kesk += el.waiting;
  }
  ooteaeg.textContent = (kesk / inp.length).toFixed(1);
  drawGantt(tasks);
}

function rr4() {
  chosen_algo.textContent = "RR4";
  gantt.textContent = getInput();
}

function fcfsx2() {
  chosen_algo.textContent = "2xFCFS";
  gantt.textContent = getInput();
}