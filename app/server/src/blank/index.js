class Base {
	constructor() {
		mp.events.add('client-side.log', (player, message) => {
			this.clientSideLog(message);
		});

		mp.events.addCommand('veh', (player, vehname = 'cheburek') => {
			try {
				const vehicle = mp.vehicles.new(vehname, new mp.Vector3(player.position.x, player.position.y + 5, player.position.z), {
						heading: player.heading,
						numberPlate: 'hyper',
						color: [0, 255, 255],
						locked: 0,
						engine: 1,
						dimension: player.dimension
				});

				if(!vehicle) return;
				console.log(`${player.name} created ${vehname}`);
			} catch (error) {
				console.log(error);
			}
		});
		 
		mp.events.add("playerDeath", (player, reason, killer) => {
			setTimeout(() => {
				player.health = 100;
				player.position = new mp.Vector3(player.position.x, player.position.y, player.position.z + 0.5);
			}, 4000);
		});

		mp.events.addCommand('position', (player) => {
			try {
				const {x, y, z} = player.position;

				console.log(`x: ${x} y: ${y} z: ${z} heading ${player.heading}`);
			} catch (error) {
				console.log(error);
			}
		});
	}

	clientSideLog(message) {
		console.log(`[client-side log]: ${message}`);
	}
}

export default new Base();