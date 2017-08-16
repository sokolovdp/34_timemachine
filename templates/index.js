var timerHTMLcode = '<div id="timerContainer">' +
                    '<div id="timerImage"> {% include '_image.html' %} </div>' +
                    '<div id="timerText"><span id="timerMinutes">00</span><span>:</span><span id="timerSeconds">00</span></div>' +
                    {% if audio %}
                        '{% include '_sound.html' %}' +
                    {% endif %}
                    '</div>';
var timerContainerStyle = "{{ timer_style }}";
var timerImageStyle = "{{ image_style }}";
var timerTextStyle = "{{ text_style }}";
var timerImageID = "timerImage";
var timerTextID = "timerText";
var timerContainerID = "timerContainer";

function addTimerHtmlToCurrentPage(timerContainerId, timerHtml) {
  var timerContainer = document.createElement("div");
  timerContainer.id = timerContainerId;
  
  var bodyTag = document.body;
  bodyTag.insertBefore(timerContainer, bodyTag.firstChild);
  timerContainer.innerHTML = timerHtml;
}

addTimerHtmlToCurrentPage(timerContainerID, timerHTMLcode);
document.getElementById(timerContainerID).setAttribute("style", timerContainerStyle);
document.getElementById(timerImageID).setAttribute("style", timerImageStyle);
document.getElementById(timerTextID).setAttribute("style", timerTextStyle);

var initialTimeOut = 1 * 60;
var smallTimeOut = 15;
var latinProverb = [
  "Acta non verba",
  "Dum spiro, spero",
  "Medice, cura te ipsum",
  "Periculum in mora",
  "Qui dormit non peccat",
  "Quod licet Iovi, non licet bovi",
  "Memento mori",
  "Post coitum omne animal triste est",
];

function getTimestampInSecs() {
  var timestampInMilliseconds = new Date().getTime();
  return Math.round(timestampInMilliseconds/1000);
}

function getCurrentTimerTime(timeoutInSecs, timestampOnStart) {
  var currentTimestamp = getTimestampInSecs();
  var secsGone = currentTimestamp - timestampOnStart;
  var secsLeft = Math.max(timeoutInSecs - secsGone, 0);

  var minutes = Math.floor(secsLeft / 60);
  var seconds = secsLeft - minutes * 60;
  return {minutes: minutes, seconds: seconds};
}

function padZero(number) {
  return ("00" + String(number)).slice(-2);
}

function displayTimer(timeoutInSecs, timestampOnStart) {
  var time = getCurrentTimerTime(timeoutInSecs, timestampOnStart);
  document.getElementById('timerMinutes').innerHTML = padZero(time.minutes);
  document.getElementById('timerSeconds').innerHTML = padZero(time.seconds);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randomInt(range) {
	return Math.floor((Math.random() * range));
}

function playAlarm(){
       var audio = document.getElementById("timerAlarm");
       audio.play();
}

async function startNagging() {
  var timeoutInSecs = initialTimeOut;

  while (true) {
    var timestampOnStart = getTimestampInSecs(timeoutInSecs);
    var currentTimerIntervalId = setInterval(displayTimer.bind(null, timeoutInSecs, timestampOnStart), 200);

    await sleep(timeoutInSecs * 1000);
    clearInterval(currentTimerIntervalId);
    {% if audio %}
      playAlarm();
    {% endif %}
    alert(latinProverb[randomInt(latinProverb.length)].toUpperCase() + " !");
    timeoutInSecs = smallTimeOut;
  }
}

{% if audio %}
   playAlarm();
{% endif %}
startNagging()