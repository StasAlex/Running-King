function Robot(height, width, step) {
    this.elem = document.createElement('div');
    this.step = step;
    document.body.appendChild(this.elem);
    this.elem.style.height = height + 'px';
    this.elem.style.width = width + 'px';
    this.elem.style.backgroundSize = 'cover';
    this.elem.style.position = 'absolute';
    this.elem.style.top = '200px';
    this.elem.style.right = '1000px';
    this.elem.classList.add('robot');
};

let robot = new Robot(100, 100, 20);

Robot.prototype.right = function () {
    if (parseInt(this.elem.style.right, 10) >= 0){
        this.elem.style.right = (parseInt(this.elem.style.right, 10) - this.step) + 'px';

    } else this.elem.style.right = (document.body.offsetWidth - this.step) + 'px';
    return this.elem.style.right
};

Robot.prototype.left = function () {
    if (parseInt(this.elem.style.right, 10) <= document.body.offsetWidth) {
        this.elem.style.right = (parseInt(this.elem.style.right, 10) + this.step) + 'px';
    }
    if ((parseInt(this.elem.style.right)) > document.body.offsetWidth) {
        this.elem.style.right = this.step + 'px';
    };

    return this.elem.style.right
};

Robot.prototype.top = function () {
    if (parseInt(this.elem.style.top, 10) >= 0) {
        this.elem.style.top = (parseInt(this.elem.style.top) - this.step) + 'px';
    }
    else this.elem.style.top = (document.body.offsetHeight - this.step) + 'px';

    return this.elem.style.top

};

Robot.prototype.down = function () {
    if (parseInt(this.elem.style.top, 10) <= document.body.offsetHeight) {
        this.elem.style.top = (parseInt(this.elem.style.top) + this.step) + 'px';
    }
    else this.elem.style.top = this.step + 'px';

    return this.elem.style.top
};

$('.right').on('click', function () {
    robot.right();
});
$('.left').on('click', function () {
    robot.left();
});
$('.up').on('click', function () {
    robot.top();
});
$('.down').on('click', function () {
    robot.down();
});