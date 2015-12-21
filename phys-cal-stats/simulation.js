var ballFix, ballBody;
var fixDef, bodyDef;
var removeBall = false;

function create(){

    var b2Vec2 = Box2D.Common.Math.b2Vec2,
    b2BodyDef = Box2D.Dynamics.b2BodyDef,
    b2Body = Box2D.Dynamics.b2Body,
    b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
    b2Fixture = Box2D.Dynamics.b2Fixture,
    b2World = Box2D.Dynamics.b2World,
    b2MassData = Box2D.Collision.Shapes.b2MassData,
    b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
    b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
    b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

    window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  function(callback, element){
                    window.setTimeout(callback, 1000 / 60);
                  };
    })();
    //world
    world = new Box2D.Dynamics.b2World(
      new b2Vec2(0, 9.8)    //gravity
      ,  false                 //allow sleep
    );
    //floor - fixture
    fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0.5;
    fixDef.restitution = 0.2;


    //floor - body
    bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(20, 2.2);
    bodyDef.position.Set(10, 400 / 30 + 1.8);
    world.CreateBody(bodyDef).CreateFixture(fixDef);
    fixDef.shape.SetAsBox(2.2, 14);
    bodyDef.position.Set(-1.8, 13);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    ballBody = new b2BodyDef;
    ballBody.type = b2Body.b2_dynamicBody;
    ballBody.userData = "ball";
    ballFix = new b2FixtureDef;
    ballFix.density = 1.0;
    ballFix.friction = 0.5;
    ballFix.restitution = 0.2;
    ballFix.shape = new b2CircleShape(0.5);
    ballBody.position.Set(1.2, 9);
    world.CreateBody(ballBody).CreateFixture(ballFix);

    window.setInterval(update, 1000 / 60);

    var debugDraw = new b2DebugDraw();
	debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
	debugDraw.SetDrawScale(30.0);
	debugDraw.SetFillAlpha(0.5);
	debugDraw.SetLineThickness(1.0);
	debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
	world.SetDebugDraw(debugDraw);

}

var update = function update(){
    world.Step(1 / 60, 10, 10);
    if(removeBall){
        world.DestroyBody(world.GetBodyList());
        var density = document.getElementById("density").value;
        var res = document.getElementById("res").value;
        ballFix.density = density;
        ballFix.restitution = res;
        world.CreateBody(ballBody).CreateFixture(ballFix);
        removeBall = false;
    }
    world.DrawDebugData();
    world.ClearForces();
}

function launch(){
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var angle = -document.getElementById("angle").value;
    var force = document.getElementById("force").value;
    var gravity = document.getElementById("gravity").value;
    world.SetGravity(new b2Vec2(0, gravity));
    world.GetBodyList().ApplyImpulse(new b2Vec2(Math.cos(angle * (Math.PI / 180)) * force, Math.sin(angle * (Math.PI / 180)) * force), world.GetBodyList().GetWorldCenter());
}

function reset(){
    removeBall = true;
}
