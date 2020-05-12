// Ray Casting

let walls = [];
let squares = [];
let circles = [];
let particle;

function setup() 
{
    createCanvas(500, 500);
    for(let i = 0; i < 5; i++)
    {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    // circles.push(new Circle(width / 2, height / 2, width / 2));
    // squares.push(new Square(width / 2, height / 2, width / 2));
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
    particle = new Particle();
}

function draw()
{
    background(50);
    for(let circle of circles)
    {
        circle.show();
    }
    for(let square of squares)
    {
        square.show();
    }
    for(let wall of walls)
    {
        wall.show();
    }
    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
}