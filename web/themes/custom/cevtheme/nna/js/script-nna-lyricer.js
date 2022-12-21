(function () {
  // The constrcutor can be empty or passed in the lrc string
  let Lyricer = function (options) {
    this.divID = "lyricer"; // the default html container id
    this.currentcss = "lyricer-current-line"; // this css for the line current playing
    this.lineidPrefix = "lyricer-line"; // the id prefix for each line
    this.showLines = 8; //lines showing before and after;
    this.clickable = true;
    this.clickEventName = "lyricerclick";
    if (options) {
      for (let prop in options) {
        if (typeof this[prop] != "undefined" && options.hasOwnProperty(prop)) {
          this[prop] = options[prop];
        }
      }
    }
  };

  Lyricer.prototype.setLrc = function (rawLrc) {
    this.tags = {};
    this.lrc = [];
    this.rangeLrc = [];

    let tagRegex = /\[([a-z]+):(.*)\].*/;
    let lrcAllRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
    let timeRegex = /\[([0-9]+):([0-9.]+)\]/;
    let rawLrcArray = rawLrc.split(/[\r\n]/);
    for (let i = 0; i < rawLrcArray.length; i++) {
      // handle tags first
      let tag = tagRegex.exec(rawLrcArray[i]);
      if (tag && tag[0]) {
        this.tags[tag[1]] = tag[2];
        continue;
      }
      // handle lrc
      let lrc = lrcAllRegex.exec(rawLrcArray[i]);
      if (lrc && lrc[0]) {
        let times = lrc[1].replace(/\]\[/g, "],[").split(",");
        for (let j = 0; j < times.length; j++) {
          let time = timeRegex.exec(times[j]);
          if (time && time[0]) {
            this.lrc.push({
              starttime: parseInt(time[1], 10) * 60 + parseFloat(time[2]),
              line: lrc[2],
            });
          }
        }
      }
    }

    //sort lrc array
    this.lrc.sort(function (a, b) {
      return a.starttime - b.starttime;
    });

    // crate the range lrc array
    // dummy lines
    for (let i = 0; i < this.showLines; i++) {
      this.rangeLrc.push({ starttime: -1, endtime: 0, line: "&nbsp;" });
    }
    // real data
    let starttime = 0;
    let line = "";
    for (let i = 0; i < this.lrc.length; i++) {
      endtime = parseFloat(this.lrc[i].starttime);
      this.rangeLrc.push({
        starttime: starttime,
        endtime: endtime,
        line: line,
      });
      starttime = endtime;
      line = this.lrc[i].line;
    }
    this.rangeLrc.push({ starttime: starttime, endtime: 999.99, line: line });
    // dummy lines
    for (let i = 0; i < this.showLines; i++) {
      this.rangeLrc.push({ starttime: -1, endtime: 0, line: "&nbsp;" });
    }
    this.totalLines = this.rangeLrc.length;

    // set html and move to start
    setHtml(this);
    this.move(0);
  };

  let setHtml = function (self) {
    self.currentLine = 0;

    let container = document.getElementById(self.divID);
    container.innerHTML = "";
    let ul = document.createElement("ul");
    container.appendChild(ul);
    
    for (let i = 0; i < self.totalLines; i++) {
      let li = document.createElement("li");
      li.innerHTML = self.rangeLrc[i].line;
      if (!li.innerHTML) {
        li.innerHTML = "&nbsp;";
      }
      li.setAttribute("id", self.lineidPrefix + i);
      if (self.clickable) {
        li.onclick = lineClicked(self, i);
        li.style.cursor = "pointer";
      }
      ul.appendChild(li);
    }

    // hide the later ones
    for (let i = self.showLines; i < self.totalLines; i++) {
      document.getElementById(self.lineidPrefix + i).style.display = "none";
    }
  };

  let lineClicked = function (self, id) {
    return function () {
      let detail = { time: self.rangeLrc[id].starttime };
      let e = new CustomEvent(self.clickEventName, {
        detail: detail,
        bubbles: true,
      });
      let elem = document.getElementById(self.lineidPrefix + id);
      elem.dispatchEvent(e);
    };
  };

  Lyricer.prototype.move = function (time) {
    for (let i = 0; i < this.totalLines; i++) {
      if (
        time >= this.rangeLrc[i].starttime &&
        time < this.rangeLrc[i].endtime
      ) {
        this.currentLine = i;
        moveToLine(this, this.currentLine);
        return;
      }
    }
  };

  let moveToLine = function (self, line) {
    let startShow = line - self.showLines;
    let endShow = line + self.showLines;
    for (let i = 0; i < self.totalLines; i++) {
      let li = document.querySelector(
        `#${self.divID} #${self.lineidPrefix + i}`
      );
      if (i >= startShow && i <= endShow) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
      if (i == line) {
        li.className = self.currentcss;
      } else {
        li.className = "";
      }
    }
  };

  window.Lyricer = Lyricer; //exposed to global
})();
