(function () {

    Fight.create = function () {
        var fight = {
            frameRequestId: undefined,
            time: undefined,
            ms_per_update: 1000 / 60
        };

        return fight;
    };

})();