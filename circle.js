class Circle
{
    constructor(x, y, radius)
    {
        this.center = createVector(x, y);
        this.radius = radius;
    }

    show()
    {
        stroke(255);
        fill(0);
        ellipse(this.center.x, this.center.y, this.radius);
    }
}