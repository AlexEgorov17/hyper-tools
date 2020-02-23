class Blank {
    constructor() {
        mp.events.add("render", () => {
            mp.game.controls.disableControlAction(2, 243, true); // disable cheatcode menu
        })
    }
}

export default new Blank();