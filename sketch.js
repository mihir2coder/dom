// const Engine=Matter.Engine
// const World=Matter.World
// const Bodies=Matter.Bodies
// var engine,world
var title,check
var check1,check2,check5
var b, r,p,v
var check3
var fgp
 var p1,p2,p3,p4,p5
 var po
 var no
 var input1,input2,input3,input4
 var add
 var namee,pin,number
var submit
var cancelo,cancel
var place
var img 

function preload(){

}
function setup() {
 createImg("ft.jpg").size(200,200).position(700,390)
 createImg("gta.jpeg").size(300,200).position(160,50)
  title=createElement("h1")
  title.html("WELCOME TO GAME STORE")
  title.position(500,100)
  
  dis = createElement("h1")
dis.html("BUY 2 GET 1 FREE!!!")
dis.position(600,200)

  check=createCheckbox()
  check.position(200,250)
  check1=createCheckbox()
  check1.position(200,300)
  check2=createCheckbox()
  check2.position(200,350)
check3=createCheckbox()
check3.position(200,400) 
check5=createCheckbox()
check5.position(200,450)
 b=createElement("h2")
 b.html("GTA V")
 b.position(250,230)
 r=createElement("h2")
 r.html("CALL OF DUTY IV")
 r.position(250,280)
 p=createElement("h2")
 p.html("WARZONE")
 p.position(250,330)
 v=createElement("h2")
 v.html("FORTNITE")
 v.position(250,380)
  p1=createElement("h3")
  p1.html("QR.150")
  p1.position(450,230)
  p2=createElement("h3")
  p2.html("QR.170")
  p2.position(470,280)
  p3=createElement("h3")
  p3.html("QR.180")
  p3.position(450,330)
  p4=createElement("h3")
  p4.html("QR.200")
  p4.position(450,380)
  po=createButton("Place Order")
  p5=createElement("h2")
  p5.html("Fall guys")

  p5.position(250,430)
  po.position(400,500)
  po.mousePressed(press)
  fgp=createElement("h3")
 fgp.html("BUY 2 GET FALL GUYS FREE")
  fgp.position(400,440)


}

function draw() {
  //Engine=engine.create()
  //world=engine.world
  
   
  
  drawSprites();
  image(img,800,400,10,10)
}
function press(){
 
  check.hide()
  dis.hide()
  title.hide()
  check1.hide()
  check2.hide()
  check3.hide()
  check5.hide()
  b.hide()
  v.hide()
  p.hide()
  r.hide()
po.hide()
p1.hide()
p2.hide()
p3.hide()
p4.hide()
p5.hide()
fgp.hide()

add=createElement("h4")
add.html("Name: ")
add.position(350,50)
namee=createElement("h4")
namee.html("Address: ")
namee.position(350,100)
pin=createElement("h4")
pin.html("Pin code: ")
pin.position(350,150)
number=createElement("h4")
number.html("Contact No. ")
number.position(350,200)
input1=createInput()
input1.position(450,70)
input2=createInput()
input2.position(450,120)
input3=createInput()
input3.position(450,170)
input4=createInput()
input4.position(450,220)
submit=createButton("Submit")
submit.position(500,300)
submit.mousePressed(placeorder)
cancelo=createButton("Cancel order")
cancelo.position(300,300)
cancelo.mousePressed(cancelorder)
}
function placeorder(){
  place=alert("Your order has been successfully placed and will be delivered at your given adresss soon.")
}
function cancelorder(){
  cancel=alert("Sorry! We cant't cancel your order.")
}