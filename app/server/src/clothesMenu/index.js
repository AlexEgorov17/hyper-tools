class ClothesMenu {
	constructor() {
        mp.events.add({
            "sCharPrev-setClothes" : (player, obj) => {
                const d = JSON.parse(obj);
                player.setClothes(d[0], d[1], d[2], d[3]);
            },
        
            "sCharPrev-setProp" : (player, obj) => {
                const d = JSON.parse(obj);
                player.setProp(d[0], d[1], d[2]);
            },
        
            "sCharPrev-setHeadOverlay" : (player, obj) => {
                const d = JSON.parse(obj);
                player.setHeadOverlay(d[0], [d[1], d[2], d[3], d[4]]);
            },
        
        });
        
        
        mp.events.addCommand({	
            'startcharprev' : (player) => {
                player.position = new mp.Vector3(-427.65, 1116.374, 326.8);
                player.heading = 343;
        
                player.call("cCharPrev-Start");
                player.model = 1885233650;
            }
        });
	}
}

export default new ClothesMenu();