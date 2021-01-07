var CollisionResolver = {};

(function () {

    CollisionResolver.putCircleInRect = function (circle, rect) {
        var min = rect.min;
        var max = rect.max;
        var p = circle.position;
        var r = circle.radius;
        if ((p.x - r) < min.x) { p.x = r + min.x; } else if ((p.x + r) > max.x) { p.x = max.x - r; };
        if ((p.y - r) < min.y) { p.y = r + min.y; } else if ((p.y + r) > max.y) { p.y = max.y - r; };
        return circle.position;
    };

})();