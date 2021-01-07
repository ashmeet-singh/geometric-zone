var Ship = {};

(function () {

    Ship.create = function (options) {
        var ship = {
            position: Vector.create(50, 50),
            velocity: Vector.create(0, 0),
            direction: Vector.create(0, -1),
            maxSpeed: 0.7,
            hearts: 3,
            radius: 1
        };

        Common.extendObject(ship, options);

        return ship;
    };

    Ship.CG = {
        rotate: 1.57,
        parts: [{
            type: 'polyline',
            stroke: true,
            strokeStyle: '#ffffff',
            lineWidth: 0.4,
            points: [0.7, -0.7, 1, 0, 0, 1, -1, 0, -0.7, -0.7]
        }]
    };

    Ship.update = function (ship, options) {
        var zone = options.zone;
        var leftJoystick = options.leftJoystick;
        var rightJoystick = options.rightJoystick;

        if (leftJoystick.isActive) {
            ship.direction = Vector.clone(leftJoystick.direction);
            ship.velocity = Vector.mult(leftJoystick.direction, ship.maxSpeed);
        } else {
            ship.velocity = Vector.create(0, 0);
        }

        Vector.add(ship.position, ship.velocity, ship.position);

        CollisionResolver.putCircleInRect(ship, zone);
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