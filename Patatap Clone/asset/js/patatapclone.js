function onKeyDown(event) {
  // When a key is pressed, create a circle item:
  var maxPoint = new Point(view.size.width, view.size.height);

  var myCircle = new Path.Circle(maxPoint, (100, 70), 50);
  var randomPoint = Point.random();
  var point = maxPoint*randomPoint;
  new Path.Circle(point, 10).fillColor = "orange";
  myCircle.fillColor = 'Blue';
}
