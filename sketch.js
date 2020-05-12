// Ray Casting and Ray Marching

let walls = [];
let squares = [];
let circles = [];
let particle;

function setup() 
{
    createCanvas(500, 500);
    // squares.push(new Square(width / 2, height / 2, width));
    // BEGIN Raycasting setup
    // for(let i = 0; i < 5; i++)
    // {
    //     let x1 = random(width);
    //     let y1 = random(height);
    //     let x2 = random(width);
    //     let y2 = random(height);
    //     walls[i] = new Boundary(x1, y1, x2, y2);
    // }
    // END Raycasting setup

    // BEGIN Raymarching setup
    // for (let i = 0; i < 2; i ++)
    // {
    //     let xCircle = random(width);
    //     let yCircle = random(height);
    //     let radius = random(width / 5);
    //     let xSquare = random(width);
    //     let ySquare = random(height);
    //     let size = random(width / 5);
    //     circles[i] = new Circle(xCircle, yCircle, radius);
    //     squares[i] = new Square(xSquare, ySquare, size);
    // }
    // END Raymarching setup
    squares.push(new Square(width / 2, height / 2, width /2));
    particle = new Particle();
}

function draw()
{
    // BEGIN Draw scene
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
    // END Draw scene

    // BEGIN Raymarching draw
    particle.update(mouseX, mouseY);
    particle.show();
    particle.signedDistanceToScene(circles, squares);
    // END Raymarching draw

    // BEGIN Raycasting draw
    // particle.update(mouseX, mouseY);
    // particle.show();
    // particle.look(walls);
    // END Raycasting draw
}