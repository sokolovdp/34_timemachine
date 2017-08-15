async function loadScript(url) {
  let response = await fetch(url);
  let script = await response.text();
  eval(script);
}

let scriptUrl = 'https://cdn.rawgit.com/sokolovdp/34_timemachine/4a3516c3/index.js'
loadScript(scriptUrl);