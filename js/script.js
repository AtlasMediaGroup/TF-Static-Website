MinecraftAPI.getServerStatus(
  "play.totalfreedom.me",
  {},
  function (err, status) {
    var s = document.querySelector("#server-status");
    var p = document.querySelector("#player-count");

    if (err) {
      s.innerHTML = "offline";
      p.innerHTML = "0";
      return s.classList.add("offline-red");
    }

    if (status.online) {
      s.innerHTML = "online";
      p.innerHTML = `${status.players.now}/${status.players.max}`;
      s.classList.add("online-green");
      return p.classList.add("online-green");
    } else {
      s.innerHTML = "offline";
      p.innerHTML = "0";
      return s.classList.add("offline-red");
    }
  }
);

function copyIP() {
  navigator.clipboard.writeText("play.totalfreedom.me");
  
  var tooltip = document.querySelector(".IPtooltiptext");
  var oldtext = tooltip.innerHTML;

  tooltip.innerHTML = "Copied!";
  
  setTimeout(function () {
    tooltip.innerHTML = oldtext;
  }, 2000);
}
