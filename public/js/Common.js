var Common = {};

(function () {

    Common.extendObject = function (object, source) {
        if (source === undefined) { return object; }
        var P;
        for (P in source) {
            if (typeof source[P] === 'object' && typeof object[P] === 'object') {
                Common.extendObject(object[P], source[P]);
            } else {
                object[P] = source[P];
            }
        }
        return object;
    };

    Common.getRndNum = function (min, max, scale) {
        if (scale === undefined) { scale = 0; }
        scale = Math.pow(10, scale);
        min *= scale;
        max *= scale;
        return (Math.floor(Math.random() * (max - min + 1)) + min) / scale;
    };

    Common.getRndItem = function (items) {
        return items[Math.floor(Math.random() * items.length)];
    };

    Common.getRndAngle = function () {
        return Common.getRndNum(0, 628) / 100;
    };
})();