var JoystickHandler = {};

(function () {

    JoystickHandler.create = function (element) {
        var elem = element;
        var handler = {};

        handler.direction = { x: undefined, y: undefined };
        handler.isActive = false;


        function setDirection(x, y) {
            var rect = elem.getBoundingClientRect();
            var px = rect.x + (rect.width * 0.5);
            var py = rect.y + (rect.height * 0.5);
            var d = Vector.normalise(Vector.create(x - px, y - py));
            handler.direction.x = d.x;
            handler.direction.y = d.y;
            handler.isActive = true;
        }

        function clearDirection() {
            handler.direction.x = undefined;
            handler.direction.y = undefined;
            handler.isActive = false;
        }

        function handleStart(evt) {
            evt.preventDefault();
            var touches = evt.changedTouches;
            var i;
            for (i = 0; i < touches.length; i++) {
                setDirection(touches[i].clientX, touches[i].clientY);
            }
        }

        function handleMove(evt) {
            evt.preventDefault();
            var touches = evt.changedTouches;
            var i;
            for (i = 0; i < touches.length; i++) {
                setDirection(touches[i].clientX, touches[i].clientY);
            }
        }

        function handleEnd(evt) {
            evt.preventDefault();
            clearDirection();
        }

        function handleCancel(evt) {
            evt.preventDefault();
            clearDirection();
        }

        function enable() {
            clearDirection();
            elem.addEventListener("touchstart", handleStart, false);
            elem.addEventListener("touchend", handleEnd, false);
            elem.addEventListener("touchcancel", handleCancel, false);
            elem.addEventListener("touchmove", handleMove, false);
            return handler;
        }

        function disable() {
            clearDirection();
            elem.removeEventListener("touchstart", handleStart, false);
            elem.removeEventListener("touchend", handleEnd, false);
            elem.removeEventListener("touchcancel", handleCancel, false);
            elem.removeEventListener("touchmove", handleMove, false);
            return handler;
        }

        handler.enable = enable;
        handler.disable = disable;

        return handler;
    };

})();
