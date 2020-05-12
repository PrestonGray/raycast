class Particle
{
    constructor()
    {
        this.pos = createVector(width/2, height/2);
        this.rays = [];
        for (let angle = 0; angle < 360; angle += 1)
        {
            this.rays.push(new Ray(this.pos, radians(angle)));
        }
    }

    update(x, y)
    {
        this.pos.x = x;
        this.pos.y = y;
    }

    distance(vector)
    {
        return sqrt(vector.x * vector.x + vector.y * vector.y);
    }

    signedDistToCircle(circle)
    {
        return this.distance(createVector(circle.center.x - this.pos.x, circle.center.y - this.pos.y)) - circle.radius;
    }

    signedDistToSquare(square)
    {
        const offset = createVector(abs(this.pos.x - square.center.x) - square.half, abs(this.pos.y - square.center.y) - square.half);
        // Distance from point outside square to edge (0 if point is inside square)
        const unsignedDist = this.distance(createVector(max(offset.x, 0), max(offset.y, 0)));
        // - Distance from point inside square to edge (0 if point is outside square)
        const distInsideSquare = max(min(offset.x, 0), min(offset.y, 0)); 

        return unsignedDist + distInsideSquare;
    }

    signedDistanceToScene(circles, squares)
    {
        let distanceToScene = Infinity;
        for(let circle of circles)
        {
            const distToCircle = this.signedDistToCircle(circle);
            distanceToScene = min(distToCircle, distanceToScene);
        }

        for(let square of squares)
        {
            const distToSquare = this.signedDistToSquare(square);
            distanceToScene = min(distToSquare, distanceToScene);
        }
        console.log(distanceToScene);

        stroke(255, 100);
        fill(0, 0);
        ellipse(this.pos.x, this.pos.y, distanceToScene * 2);

        // return distanceToScene;
    }

    look(walls)
    {
        for(let ray of this.rays)
        {
            let closest = null;
            let record = Infinity;
            for(let wall of walls)
            {
                const {point, distance} = ray.cast(wall);
                if(point)
                {
                    if(distance < record)
                    {
                        record = distance;
                        closest = point;
                    }
                }
            }
            if(closest)
            {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            }
        }
    }

    show()
    {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 8);
        // for(let ray of this.rays)
        // {
        //     ray.show();
        // }
    }
}