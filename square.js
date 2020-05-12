class Square
{
    constructor(x, y, length)
    {
        this.center = createVector(x, y);
        this.length = length;
        this.half = length / 2;
    }

    show()
    {
        stroke(0);
        fill(0, 0);
        // Allows for drawing the square relative to the center instead of the corner
        square(this.center.x - (this.length / 2), this.center.y - (this.length / 2), this.length);
    }
}