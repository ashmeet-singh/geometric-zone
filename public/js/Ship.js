var Ship = {};

(function () {

    Ship.create = function (options) {
        var ship = {
            position: Vector.create(50, 50),
            oldPosition: undefined,
            direction: Vector.create(0, -1),
            maxSpeed: 0.6,
            hearts: 3,
            radius: 1.25
        };

        ship.oldPosition = Vector.clone(ship.position);

        Common.extendObject(ship, options);

        return ship;
    };

    Ship.CG = {
        rotate: 1.57,
        parts: [{
            type: 'polyline',
            stroke: true,
            strokeStyle: '#ffffff',
            lineWidth: 0.3,
            points: [0.7, -0.7, 1, 0, 0, 1, -1, 0, -0.7, -0.7]
        }]
    };

    Ship.update = function (ship, options) {
        var zone = options.zone;
        var leftJoystick = options.leftJoystick;
        var rightJoystick = options.rightJoystick;

        if (leftJoystick.isActive) {
            ship.direction = Vector.clone(leftJoystick.direction);

            Vector.sub(ship.position, Vector.mult(leftJoystick.direction, ship.maxSpeed), ship.oldPosition)

            var velocity = Vector.sub(ship.position, ship.oldPosition);
            Vector.add(ship.position, velocity, ship.position);
            ship.oldPosition = Vector.sub(ship.position, velocity);
        } else {
            ship.oldPosition = ship.position;
        }
    };

    Ship.render = function (ship, options) {
        CGR({
            ctx: options.ctx,
            CG: Ship.CG,
            translate: ship.position,
            rotate: Vector.angle(Vector.create(0, 0), ship.direction),
            scale: Vector.create(ship.radius, ship.radius)
        });
    };

})();