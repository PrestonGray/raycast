class Box
{
    constructor(x, y, size)
    {
        this.topLeft = createVector(x - (size / 2), y + (size / 2));
        this.topRight = createVector(x + (size / 2), y + (size / 2));
        this.botRight = createVector(x + (size / 2), y - (size / 2));
        this.botLeft = createVector(x - (size / 2), y - (size / 2));
    }

    show()
    {
        stroke(255);
        line(this.topLeft.x, this.topLeft.y, this.topRight.x, this.topRight.y);
        line(this.topRight.x, this.topRight.y, this.botRight.x, this.botRight.y);
        line(this.botRight.x, this.botRight.y, this.botLeft.x, this.botLeft.y);
        line(this.botLeft.x, this.botLeft.y, this.topLeft.x, this.topLeft.y);
    }
}