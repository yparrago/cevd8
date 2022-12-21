//EAO 09/11/1984 
const grid = jQuery(".dots")[0],
  container = jQuery(".dots-container");

let dotList = [],
  gridDiff = 30;
  gridDiff = 30,
  curDist = 0,
  mouseDist = undefined,
  gridMouseX = 0,
  gridMouseY = 0,
  cols = 14,
  rows = 22,
  colsToMoveOnBreakpoint = {
    lg: 1,
    xlg: 1,
    x2lg: 1,
  };

/**
Dot Class
**/
class Dot {
  constructor(c, r) {
    this.cell = document.createElement("div");
    this.cell.className = "dot";
    this.cell.dataset.column = c;
    this.cell.dataset.row = r;

    this.x = this.startX = gridDiff * c;
    this.y = this.startY = gridDiff * r;

    grid.appendChild(this.cell);
    this.updatePosition();
  }

  updatePosition() {
    if (this.cell.classList.contains("immovable")) return;

    this.mouseX = gridMouseX - this.x;
    this.mouseY = gridMouseY - this.y;

    this.x += (this.startX - this.x) / 10;
    this.y += (this.startY - this.y) / 10;

    curDist = Math.sqrt(this.mouseX * this.mouseX + this.mouseY * this.mouseY);

    if (
      curDist < mouseDist &&
      curDist != 0 &&
      gridMouseX != 0 &&
      gridMouseY != 0
    ) {
      this.x = gridMouseX - mouseDist * (this.mouseX / curDist);
      this.y = gridMouseY - mouseDist * (this.mouseY / curDist);
    }

    this.cell.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

const breakpointsConf = {
  sm: {
    diff: 30,
    cols: 12,
    rows: 16,
  },
  md: {
    diff: 32,
    cols: 22,
    rows: 22,
  },
  lg: {
    diff: 28,
    cols: 41,
    rows: 14,
  },
    xlg: {
    diff: 28,
    cols: 41,
    rows: 20,
  },
};

/**
 * Extract Breakpoints form css in order to setup the right sizes and elements for grid
 */
let breakpoints = {};

breakpoints.refreshValue = function () {
  this.value = window
    .getComputedStyle(document.querySelector("body"), ":before")
    .getPropertyValue("content")
    .replace(/\"/g, "");
};

breakpoints.refreshValue();
let currentBreakpoint = breakpoints.value;

jQuery(window)
  .resize(() => {
    breakpoints.refreshValue();

    let bp = breakpointsConf[currentBreakpoint];

    if (bp) {
      gridDiff = bp.diff;

      if (bp.cols && bp.rows) {
        cols = bp.cols;
        rows = bp.rows;
      }
    }

    if (breakpoints.value != currentBreakpoint) {
      currentBreakpoint = breakpoints.value;
    }
  })
  .resize();

/*** Dots Functions ***/
/**
 *
 * @param {Number} cols
 * @param {Number} rows
 */
function createGrid(cols, rows) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dotList.push(new Dot(c, r));
    }
  }

  container.css({
    width: cols * gridDiff + "px",
    height: rows * gridDiff + "px",
  });
}

function clearSections() {
  jQuery(".dots .dot.menu").each(function (i, element) {
    jQuery(element).removeClass("menu immovable").html("");
  });
}

function setMouseDist(dist) {
  mouseDist = dist === undefined ? 80 : dist;
}

/**
 * Add events for mouse and touch gestures
 */
function addListeners() {
  document.addEventListener("mousemove", (event) => {
    if (mouseDist === undefined) setMouseDist();

    let rect = grid.getBoundingClientRect();
    gridMouseX = event.clientX - rect.left;
    gridMouseY = event.clientY - rect.top;
  });

  document.addEventListener("touchstart", (e) => {
    if (e.target && jQuery(e.target).hasClass('dot-link-text')) {
      return;
    }
    setMouseDist(70);
    setTimeout(() => setMouseDist(0), 400);
  });
}

function loop() {
  for (let i = 0; i < dotList.length; i++) {
    dotList[i].updatePosition();
  }
  window.requestAnimationFrame(loop);
}

window.onload = () => {
  initDotsGrid();
};

function initDotsGrid(customGrid) {
  if (typeof customGrid === "object" && customGrid[currentBreakpoint]) {
    cols = customGrid[currentBreakpoint].cols || cols;
    rows = customGrid[currentBreakpoint].rows || rows;
  } else {
    jQuery(window).resize();
  }
  window.requestAnimationFrame(loop);
  addListeners();
  createGrid(cols, rows);
}

/**
 * Add sections to the specified dots
 * @param {array} sections
 */
function appendSections(sections) {
  sections.forEach((element) => {
    let position = null;

    if (element.position[currentBreakpoint] !== undefined) {
      position =
        cols * (element.position[currentBreakpoint].row - 1) +
        element.position[currentBreakpoint].column +
        1;
    } else {
      position = cols * (element.position.row - 1) + element.position.column;
    }

    const dot = jQuery(`.dots .dot:nth-child(${position})`);
    dot.addClass("menu immovable");

    // for sections with links only
    if (element.page || element.menu) {
      const color = element.color;
      // console.log(color);
      let bg = color ? `style="background: ${color}"` : "";
      dot.css({ backgroundColor: color, zIndex: 2 });
      dot.append(() => {
        return `
        <div class="sonar-emitter">
          <div class="sonar-wave sonar-wave1" ${bg}"></div>
          <div class="sonar-wave sonar-wave2" ${bg}"></div>
        </div>
        <div class="dot-link" ${bg} ${
          element.page
            ? `onClick="screenLinksListener('${element.page}')" data-hoverable`
            : ""
        }>
          ${
            element.page
              ? `<span class="dot-link-text smoothGrowX animate" ${bg}"> ${element.text}</span>`
              : ""
          }
          </div>`;
      });
    }

    // for sections with menu options
    if (element.menu) {
      let div = jQuery("<div></div>");
      div.addClass("menu-content");

      const title = element.menu.title,
        isString = typeof title === "string";

      div.id = slugify(isString ? element.menu.title : element.menu.title.text);

      let titleHTML = `
        <span ${
          !isString
            ? ` data-bs-target="${title.modal || ""}" class="modal_cev ${title.puntero}" data-class="${title.clase}" data-nid="${title.dataNid}"`
            : ""
        }>
          ${isString ? title : title.text}
        </span>
      `;

      let itemsHTML = "";

      element.menu.items.forEach((item) => {
        itemsHTML += `
          <a href="${item.url || "#"}" class="menu-item modal_cev" data-nid="${item.dataNid}" data-class="${item.clase}" data-bs-target="${
          item.modal || ""
        }" data-bs-toggle="modal">
            ${item.text}
          </a>
        `;
      });

      div.html(`
        <div>
          <p class="menu-title">
            ${titleHTML}
          </p>
          <div class="menu-items">
            ${itemsHTML}
          </div>
        </div>
      `);

      let mapImage = jQuery("#dots-map img");

      div.css(dot.position());
      dot.after(div);
      function MenuEvent(e) {
        div.toggleClass("active");

        if (div.hasClass("active")) {
          mouseDist = 0;
          if (mapImage && element.map) {
            mapImage.attr("src", element.map);
          } else {
            mapImage.attr("src", "");
          }

          setTimeout(() => {
            openedDropdown = div;
          });
        }
      }

      if (currentBreakpoint === "lg" || currentBreakpoint === "xlg") {
        dot.mouseenter(MenuEvent);
        div.mouseleave(function () {
          div.toggleClass("active");
          if (!jQuery(".menu-content.active").length) {
            jQuery("#dots-map img").attr("src", "/themes/custom/cevtheme/volumen-testimonial/assets/map-caribe.svg");
          }

          setMouseDist();
        });
      } else {
        dot.click(MenuEvent);
      }
    }
  });
}
