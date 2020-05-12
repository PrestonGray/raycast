class Square
{
    constructor(x, y, size)
    {
        this.center = createVector(x, y);
        this.size = size;
    }

    show()
    {
        stroke(0);
        fill(0);
        // Allows for drawing the square relative to the center instead of the corner
        square(this.center.x - (this.size / 2), this.center.y - (this.size / 2), this.size);
    }
}