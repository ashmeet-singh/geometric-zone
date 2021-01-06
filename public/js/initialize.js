(function () {

    View.initializeElements();

    var cvs = View.MainCanvas;
    var ctx = cvs.getContext('2d', { alpha: false });

    var fight = Fight.create({
        cvs: cvs,
        ctx: ctx,
        inputs: {
            leftJoystick: JoystickHandler.create(View.LeftJoystick).enable(),
            rightJoystick: JoystickHandler.create(View.RightJoystick).enable(),
        }
    });

    Fight.start(fight);
})();