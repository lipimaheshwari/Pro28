
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;


function preload(){

	boy=loadImage("boy.png");

  }

function setup() {

	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1010,100,30);
	mango3=new mango(1050,150,30);
	mango4=new mango(1150,160,30);
	mango5=new mango(910,200,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(1110,230,30);
	mango8=new mango(1200,200,30);

	treeObj=new tree(1050,580);
	stoneObj = new stone(200,200);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  //Add code for displaying text here!
  image(boy ,150,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stoneObj.display();

  groundObject.display();

}
