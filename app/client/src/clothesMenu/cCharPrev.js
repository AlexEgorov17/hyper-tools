"use strict"

let cef = null;
let camera = null;
const player = mp.players.local;




mp.events.add(
{		
	"cCharPrev-Start" : () => {
		mp.gui.cursor.visible = true;
		mp.game.ui.displayRadar(false);
		mp.gui.chat.show(false);
		camera = mp.cameras.new("Cam", {x: -422.38, y: 1134.75, z: 326.674}, {x: 0, y: 0, z: 163}, 6);
		camera.setActive(true);
		mp.game.cam.renderScriptCams(true, true, 20000000000000000000000000, false, false);
		cef = mp.browsers.new("package://cef/clothesMenu/index.html");
	},

	"cCharPrev-setProp" : (d) => {
		mp.events.callRemote("sCharPrev-setProp", d);
	},

	"cCharPrev-setClothes" : (d) => {
		mp.events.callRemote("sCharPrev-setClothes", d);
	},

	"cCharPrev-setHeadOverlay" : (d) => {
		mp.events.callRemote("sCharPrev-setHeadOverlay", d);
	},

	"cCharPrev-changeRotation" : (angle) => {
		player.setHeading(angle);
	},

	"cCharPrev-Close" : () => {
		cef.destroy(); 
		cef = null;
		mp.gui.cursor.visible = false;
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);
		camera.setActive(false);
		mp.game.cam.renderScriptCams(false, true, 0, true, true);
		camera.destroy();
	},

});
	