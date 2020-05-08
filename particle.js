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
        ellipse(this.pos.x, this.pos.y, 4);
        for(let ray of this.rays)
        {
            ray.show();
        }
    }
}