/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/character */ \"./src/scripts/character.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d'); // c is context\n\n  canvas.width = 1024;\n  canvas.height = 576;\n  context.fillRect(0, 0, canvas.width, canvas.height);\n\n  // creatae a new player\n\n  const player = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    // creating the position and velocity as a key: value pair\n    position: {\n      x: 0,\n      y: 150 // so that we start at the bottom of the frame\n    },\n\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    color: 'green',\n    offset: {\n      x: 0,\n      y: 0\n    }\n  });\n  console.log(player);\n  const enemy = new _scripts_character__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, context, {\n    position: {\n      x: 400,\n      y: 100\n    },\n    velocity: {\n      x: 0,\n      y: 0\n    },\n    color: 'blue',\n    offset: {\n      x: -50,\n      y: 0\n    }\n  });\n  const keys = {\n    a: {\n      pressed: false\n    },\n    d: {\n      pressed: false\n    },\n    w: {\n      pressed: false\n    }\n  };\n  function attackCollision(player1, player2) {\n    return player1.attackRect.position.x + player1.attackRect.width >= player2.position.x && player1.attackRect.position.x <= player2.position.x + player2.width && player1.attackRect.position.y + player1.attackRect.height >= player2.position.y && player1.attackRect.position.y <= player2.position.y + player2.height;\n  }\n  function movement() {\n    context.fillStyle = \"black\"; // this is done so that when we call movement the color of the canvas doesn't turn red bcs of \n    // this.context.fillStyle = \"red\" in draw() method\n    context.fillRect(0, 0, canvas.width, canvas.height);\n    window.requestAnimationFrame(movement); // this calls movement function on an endless loop\n    player.update();\n    enemy.update();\n    player.velocity.x = 0;\n    if (keys.a.pressed) {\n      player.velocity.x = -5;\n    } else if (keys.d.pressed) {\n      player.velocity.x = 5;\n    } else if (keys.w.pressed) {\n      // if(player.position.y > 0){\n      player.velocity.y = -10;\n      // }\n    }\n\n    //collision detection\n    if (attackCollision(player, enemy) && player.attacking) {\n      player.attacking = false;\n      enemy.health -= 20;\n      document.querySelector('#enemyHealth').style.width = enemy.health + '%';\n    }\n    if (attackCollision(enemy, player) && enemy.attacking) {\n      enemy.attacking = false;\n      player.health -= 20;\n      document.querySelector('#playerHealth').style.width = player.health + '%';\n    }\n  }\n  movement();\n  window.addEventListener('keydown', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = true; // when i press d movement function picks it up bcs it is running \n        // every unit of time. \n        break;\n      case 'a':\n        keys.a.pressed = true;\n        break;\n      case 'w':\n        keys.w.pressed = true;\n        break;\n      case 'k':\n        player.attack();\n        break;\n    }\n    console.log(event.key);\n  });\n  window.addEventListener('keyup', event => {\n    //keydown is a key that allows for recognition of keyboard inputs on the console\n    switch (event.key) {\n      case 'd':\n        keys.d.pressed = false; // when i release d, movement functuin picks it up bcs it's running\n        // every unit of time\n        break;\n      case 'a':\n        keys.a.pressed = false;\n        break;\n      case 'w':\n        keys.w.pressed = false;\n        console.log(\"released\", event.key);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL2phdmFzY3JpcHRfZ2FtZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyYWN0ZXIgZnJvbSBcIi4vc2NyaXB0cy9jaGFyYWN0ZXJcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7ICAvLyBjIGlzIGNvbnRleHRcblxuICAgIGNhbnZhcy53aWR0aCA9IDEwMjQ7XG4gICAgY2FudmFzLmhlaWdodCA9IDU3NjtcblxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuXG4gICAgLy8gY3JlYXRhZSBhIG5ldyBwbGF5ZXJcblxuXG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKGNhbnZhcyxjb250ZXh0LCB7ICAgIC8vIGNyZWF0aW5nIHRoZSBwb3NpdGlvbiBhbmQgdmVsb2NpdHkgYXMgYSBrZXk6IHZhbHVlIHBhaXJcbiAgICAgICAgcG9zaXRpb246e1xuICAgICAgICAgICAgeDogMCwgXG4gICAgICAgICAgICB5OiAxNTAgLy8gc28gdGhhdCB3ZSBzdGFydCBhdCB0aGUgYm90dG9tIG9mIHRoZSBmcmFtZVxuICAgICAgICB9LFxuICAgICAgICB2ZWxvY2l0eTp7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxuXG4gICAgICAgIG9mZnNldDp7XG4gICAgICAgICAgICB4OjAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHBsYXllcilcblxuICAgIFxuXG4gICAgXG4gICAgXG4gICAgY29uc3QgZW5lbXkgPSBuZXcgQ2hhcmFjdGVyKGNhbnZhcywgY29udGV4dCwge1xuICAgICAgICBwb3NpdGlvbjp7XG4gICAgICAgICAgICB4OiA0MDAsIFxuICAgICAgICAgICAgeTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIHZlbG9jaXR5OntcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OjBcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6ICdibHVlJyxcbiAgICAgICAgb2Zmc2V0OntcbiAgICAgICAgICAgIHg6LTUwLFxuICAgICAgICAgICAgeTowXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0ge1xuICAgICAgICBhOiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBkOiB7XG4gICAgICAgICAgICBwcmVzc2VkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB3OntcbiAgICAgICAgICAgIHByZXNzZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICBcblxuICAgIGZ1bmN0aW9uIGF0dGFja0NvbGxpc2lvbihwbGF5ZXIxLCBwbGF5ZXIyKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgcGxheWVyMS5hdHRhY2tSZWN0LnBvc2l0aW9uLnggKyBwbGF5ZXIxLmF0dGFja1JlY3Qud2lkdGggPj0gcGxheWVyMi5wb3NpdGlvbi54XG4gICAgICAgICAgICAmJiBcbiAgICAgICAgICAgIHBsYXllcjEuYXR0YWNrUmVjdC5wb3NpdGlvbi54IDw9IHBsYXllcjIucG9zaXRpb24ueCArIHBsYXllcjIud2lkdGhcbiAgICAgICAgICAgICYmIFxuICAgICAgICAgICAgcGxheWVyMS5hdHRhY2tSZWN0LnBvc2l0aW9uLnkgKyBwbGF5ZXIxLmF0dGFja1JlY3QuaGVpZ2h0ID49IHBsYXllcjIucG9zaXRpb24ueVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgIHBsYXllcjEuYXR0YWNrUmVjdC5wb3NpdGlvbi55IDw9IHBsYXllcjIucG9zaXRpb24ueSArIHBsYXllcjIuaGVpZ2h0XG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbW92ZW1lbnQoKXtcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7ICAvLyB0aGlzIGlzIGRvbmUgc28gdGhhdCB3aGVuIHdlIGNhbGwgbW92ZW1lbnQgdGhlIGNvbG9yIG9mIHRoZSBjYW52YXMgZG9lc24ndCB0dXJuIHJlZCBiY3Mgb2YgXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcInJlZFwiIGluIGRyYXcoKSBtZXRob2RcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShtb3ZlbWVudCkgLy8gdGhpcyBjYWxscyBtb3ZlbWVudCBmdW5jdGlvbiBvbiBhbiBlbmRsZXNzIGxvb3BcbiAgICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuICAgICAgICBlbmVteS51cGRhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDA7XG4gICAgICAgIGlmKGtleXMuYS5wcmVzc2VkICl7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IC01XG4gICAgICAgIH1lbHNlIGlmKGtleXMuZC5wcmVzc2VkICl7XG4gICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHkueCA9IDVcbiAgICAgICAgfWVsc2UgaWYoa2V5cy53LnByZXNzZWQgKXtcbiAgICAgICAgICAgIC8vIGlmKHBsYXllci5wb3NpdGlvbi55ID4gMCl7XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5LnkgPSAtMTBcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vY29sbGlzaW9uIGRldGVjdGlvblxuICAgICAgICBpZiggYXR0YWNrQ29sbGlzaW9uKFxuICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgZW5lbXlcbiAgICAgICAgKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgIHBsYXllci5hdHRhY2tpbmcpe1xuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBlbmVteS5oZWFsdGggLT0gMjA7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZW15SGVhbHRoJykuc3R5bGUud2lkdGggPSBlbmVteS5oZWFsdGggKyAnJSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggYXR0YWNrQ29sbGlzaW9uKFxuICAgICAgICAgICAgZW5lbXksXG4gICAgICAgICAgICBwbGF5ZXJcbiAgICAgICAgKVxuICAgICAgICAgICAgJiZcbiAgICAgICAgICAgIGVuZW15LmF0dGFja2luZyl7XG4gICAgICAgICAgICAgICAgZW5lbXkuYXR0YWNraW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcGxheWVyLmhlYWx0aCAtPSAyMDtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVySGVhbHRoJykuc3R5bGUud2lkdGggPSBwbGF5ZXIuaGVhbHRoICsgJyUnO1xuICAgICAgICB9XG4gICAgXG4gICAgfVxuICAgIG1vdmVtZW50KCk7XG5cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PnsgICAvL2tleWRvd24gaXMgYSBrZXkgdGhhdCBhbGxvd3MgZm9yIHJlY29nbml0aW9uIG9mIGtleWJvYXJkIGlucHV0cyBvbiB0aGUgY29uc29sZVxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IHRydWUgLy8gd2hlbiBpIHByZXNzIGQgbW92ZW1lbnQgZnVuY3Rpb24gcGlja3MgaXQgdXAgYmNzIGl0IGlzIHJ1bm5pbmcgXG4gICAgICAgICAgICAgICAgLy8gZXZlcnkgdW5pdCBvZiB0aW1lLiBcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhJzogXG4gICAgICAgICAgICAgICAga2V5cy5hLnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAga2V5cy53LnByZXNzZWQgPSB0cnVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnayc6XG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjaygpOyBcbiAgICAgICAgICAgIGJyZWFrICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQua2V5KTtcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PnsgICAvL2tleWRvd24gaXMgYSBrZXkgdGhhdCBhbGxvd3MgZm9yIHJlY29nbml0aW9uIG9mIGtleWJvYXJkIGlucHV0cyBvbiB0aGUgY29uc29sZVxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ2QnOiBcbiAgICAgICAgICAgICAgICBrZXlzLmQucHJlc3NlZCA9IGZhbHNlIC8vIHdoZW4gaSByZWxlYXNlIGQsIG1vdmVtZW50IGZ1bmN0dWluIHBpY2tzIGl0IHVwIGJjcyBpdCdzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAvLyBldmVyeSB1bml0IG9mIHRpbWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhJzogXG4gICAgICAgICAgICAgICAga2V5cy5hLnByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgICAgIGtleXMudy5wcmVzc2VkID0gZmFsc2VcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbGVhc2VkXCIsZXZlbnQua2V5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KVxuXG59KVxuXG5cblxuXG4iXSwibmFtZXMiOlsiQ2hhcmFjdGVyIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsUmVjdCIsInBsYXllciIsInBvc2l0aW9uIiwieCIsInkiLCJ2ZWxvY2l0eSIsImNvbG9yIiwib2Zmc2V0IiwiY29uc29sZSIsImxvZyIsImVuZW15Iiwia2V5cyIsImEiLCJwcmVzc2VkIiwiZCIsInciLCJhdHRhY2tDb2xsaXNpb24iLCJwbGF5ZXIxIiwicGxheWVyMiIsImF0dGFja1JlY3QiLCJtb3ZlbWVudCIsImZpbGxTdHlsZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImF0dGFja2luZyIsImhlYWx0aCIsInN0eWxlIiwiZXZlbnQiLCJrZXkiLCJhdHRhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/character.js":
/*!**********************************!*\
  !*** ./src/scripts/character.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nconst gravity = 0.7;\nclass Character {\n  // add canvas and context as arguments for constructor as they were created in a different class file//\n\n  constructor(canvas, context, _ref) {\n    let {\n      position,\n      velocity,\n      color,\n      offset\n    } = _ref;\n    this.canvas = canvas; // creating the frame\n    this.context = context; // this is where we attatch our programatic logic\n    this.position = position; // position of character. Contains x, y\n    this.velocity = velocity; // velocity of character. Contains x, y. Only use is to be added to position(change position)\n    this.color = color;\n    this.width = 50; // width of my character box. Incrases widht towards right\n    this.height = 150; /// height of my character box. Increases height towards bottom\n\n    this.attackRect = {\n      position: {\n        x: this.position.x,\n        y: this.position.y\n      },\n      offset,\n      width: 100,\n      height: 50\n    };\n    this.attacking;\n    this.health = 100;\n  }\n  draw() {\n    // we defined context in DOMContentLoaded in index.js\n    // hence context will not be available in character.js /  character class;\n    // that's why we have to do this.context instead\n\n    this.context.fillStyle = this.color;\n    this.context.fillRect(this.position.x, this.position.y, this.width, this.height);\n    if (this.attacking) {\n      this.context.fillStyle = \"blue\";\n      this.context.fillRect(this.attackRect.position.x, this.attackRect.position.y, this.attackRect.width, this.attackRect.height);\n    }\n  }\n  update() {\n    // this is not the update for the entire fram. this just updates the specific character.\n    // update gets called every unit of timein movement();\n    this.draw();\n    this.attackRect.position.x = this.position.x + this.attackRect.offset.x;\n    this.attackRect.position.y = this.position.y;\n    this.position.x += this.velocity.x;\n    // if character position becomes < 0, this means it's in the ceiling. stop code from reducing the value \n    //of y anymore\n    if (this.position.y < 0) {\n      this.velocity.y = gravity; // gravity is what brings it back down from the ceiling\n    }\n\n    this.position.y += this.velocity.y;\n    if (this.position.y + this.height + this.velocity.y >= this.canvas.height) {\n      this.velocity.y = 0; //stopping movement when the user chareacter is >= canvas height(boundary wall)\n    } else {\n      this.velocity.y += gravity; // adding gravity prevents the characters from leaving the screen\n    }\n  }\n\n  attack() {\n    this.attacking = true;\n    setInterval(() => {\n      this.attacking = false;\n    }, 1000);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBR2xDLElBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNRLENBQUMsR0FBRyxJQUFJLENBQUNILE1BQU0sR0FBRyxJQUFJLENBQUNKLFFBQVEsQ0FBQ08sQ0FBQyxJQUFJLElBQUksQ0FBQ1gsTUFBTSxDQUFDUSxNQUFNLEVBQUM7TUFDckUsSUFBSSxDQUFDSixRQUFRLENBQUNPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDLE1BQ0c7TUFDRCxJQUFJLENBQUNQLFFBQVEsQ0FBQ08sQ0FBQyxJQUFJZCxPQUFPLENBQUMsQ0FBRTtJQUNqQztFQUVKOztFQUVBcUIsTUFBTUEsQ0FBQSxFQUFFO0lBQ0osSUFBSSxDQUFDTixTQUFTLEdBQUcsSUFBSTtJQUNyQk8sV0FBVyxDQUFDLE1BQU07TUFDZCxJQUFJLENBQUNQLFNBQVMsR0FBRyxLQUFLO0lBQzFCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWjtBQUdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9nYW1lLy4vc3JjL3NjcmlwdHMvY2hhcmFjdGVyLmpzPzE4MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBncmF2aXR5ID0gMC43O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFyYWN0ZXIge1xuICAgIFxuXG4gICAgLy8gYWRkIGNhbnZhcyBhbmQgY29udGV4dCBhcyBhcmd1bWVudHMgZm9yIGNvbnN0cnVjdG9yIGFzIHRoZXkgd2VyZSBjcmVhdGVkIGluIGEgZGlmZmVyZW50IGNsYXNzIGZpbGUvL1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjb250ZXh0LHtwb3NpdGlvbiwgdmVsb2NpdHksIGNvbG9yLCBvZmZzZXR9KSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzOyAvLyBjcmVhdGluZyB0aGUgZnJhbWVcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gdGhpcyBpcyB3aGVyZSB3ZSBhdHRhdGNoIG91ciBwcm9ncmFtYXRpYyBsb2dpY1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAvLyBwb3NpdGlvbiBvZiBjaGFyYWN0ZXIuIENvbnRhaW5zIHgsIHlcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5OyAvLyB2ZWxvY2l0eSBvZiBjaGFyYWN0ZXIuIENvbnRhaW5zIHgsIHkuIE9ubHkgdXNlIGlzIHRvIGJlIGFkZGVkIHRvIHBvc2l0aW9uKGNoYW5nZSBwb3NpdGlvbilcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICBcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwOyAgLy8gd2lkdGggb2YgbXkgY2hhcmFjdGVyIGJveC4gSW5jcmFzZXMgd2lkaHQgdG93YXJkcyByaWdodFxuICAgICAgICB0aGlzLmhlaWdodCA9IDE1MDsgLy8vIGhlaWdodCBvZiBteSBjaGFyYWN0ZXIgYm94LiBJbmNyZWFzZXMgaGVpZ2h0IHRvd2FyZHMgYm90dG9tXG5cbiAgICAgICAgdGhpcy5hdHRhY2tSZWN0ID17IFxuICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy5wb3NpdGlvbi55XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dGFja2luZztcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKXtcblxuICAgICAgICAvLyB3ZSBkZWZpbmVkIGNvbnRleHQgaW4gRE9NQ29udGVudExvYWRlZCBpbiBpbmRleC5qc1xuICAgICAgICAvLyBoZW5jZSBjb250ZXh0IHdpbGwgbm90IGJlIGF2YWlsYWJsZSBpbiBjaGFyYWN0ZXIuanMgLyAgY2hhcmFjdGVyIGNsYXNzO1xuICAgICAgICAvLyB0aGF0J3Mgd2h5IHdlIGhhdmUgdG8gZG8gdGhpcy5jb250ZXh0IGluc3RlYWRcblxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICAgICAgaWYodGhpcy5hdHRhY2tpbmcpe1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh0aGlzLmF0dGFja1JlY3QucG9zaXRpb24ueCwgdGhpcy5hdHRhY2tSZWN0LnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgdGhpcy5hdHRhY2tSZWN0LndpZHRoLCB0aGlzLmF0dGFja1JlY3QuaGVpZ2h0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKCl7XG4gICAgICAgIC8vIHRoaXMgaXMgbm90IHRoZSB1cGRhdGUgZm9yIHRoZSBlbnRpcmUgZnJhbS4gdGhpcyBqdXN0IHVwZGF0ZXMgdGhlIHNwZWNpZmljIGNoYXJhY3Rlci5cbiAgICAgICAgLy8gdXBkYXRlIGdldHMgY2FsbGVkIGV2ZXJ5IHVuaXQgb2YgdGltZWluIG1vdmVtZW50KCk7XG4gICAgICAgIHRoaXMuZHJhdygpOyBcbiAgICAgICAgdGhpcy5hdHRhY2tSZWN0LnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLmF0dGFja1JlY3Qub2Zmc2V0Lng7XG4gICAgICAgIHRoaXMuYXR0YWNrUmVjdC5wb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvbi55XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMudmVsb2NpdHkueDtcbiAgICAgICAgLy8gaWYgY2hhcmFjdGVyIHBvc2l0aW9uIGJlY29tZXMgPCAwLCB0aGlzIG1lYW5zIGl0J3MgaW4gdGhlIGNlaWxpbmcuIHN0b3AgY29kZSBmcm9tIHJlZHVjaW5nIHRoZSB2YWx1ZSBcbiAgICAgICAgLy9vZiB5IGFueW1vcmVcbiAgICAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgMCl7IFxuXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgPSBncmF2aXR5OyAvLyBncmF2aXR5IGlzIHdoYXQgYnJpbmdzIGl0IGJhY2sgZG93biBmcm9tIHRoZSBjZWlsaW5nXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHkueTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCArIHRoaXMudmVsb2NpdHkueSA+PSB0aGlzLmNhbnZhcy5oZWlnaHQpe1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS55ID0gMDsgLy9zdG9wcGluZyBtb3ZlbWVudCB3aGVuIHRoZSB1c2VyIGNoYXJlYWN0ZXIgaXMgPj0gY2FudmFzIGhlaWdodChib3VuZGFyeSB3YWxsKVxuICAgICAgICAgfSBcbiAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKz0gZ3Jhdml0eTsgIC8vIGFkZGluZyBncmF2aXR5IHByZXZlbnRzIHRoZSBjaGFyYWN0ZXJzIGZyb20gbGVhdmluZyB0aGUgc2NyZWVuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgYXR0YWNrKCl7XG4gICAgICAgIHRoaXMuYXR0YWNraW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hdHRhY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBcbn0iXSwibmFtZXMiOlsiZ3Jhdml0eSIsIkNoYXJhY3RlciIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY29udGV4dCIsIl9yZWYiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiY29sb3IiLCJvZmZzZXQiLCJ3aWR0aCIsImhlaWdodCIsImF0dGFja1JlY3QiLCJ4IiwieSIsImF0dGFja2luZyIsImhlYWx0aCIsImRyYXciLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInVwZGF0ZSIsImF0dGFjayIsInNldEludGVydmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/character.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X2dhbWUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;