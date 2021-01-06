(function () {

    Fight.update = function (fight) {
        var ship = fight.ship,
            zone = fight.zone;

        Ship.update(ship, {
            zone: zone,
            leftJoystick: fight.inputs.leftJoystick,
            rightJoystick: fight.inputs.rightJoystick
        });
    };

})();