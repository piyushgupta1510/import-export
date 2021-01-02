import React from "react";
function Heading() {
  var date = new Date();
  date.setHours(21, 0, 0);
  var time = date.getTime();
  var text = "default";
  var customStyle = { color: "orange" };
  // Good Morning
  var morning = new Date();
  morning.setHours(12, 0, 0);
  var afternoon = new Date();
  afternoon.setHours(18, 0, 0);
  var night = new Date();
  night.setHours(23, 59, 59);

  if (time < morning) {
    text = "Good Morning";
    customStyle.color = "red";
  } else if (time > morning && time < afternoon) {
    text = "Good Afternoon";
    customStyle.color = "green";
  } else {
    text = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 class="heading" style={customStyle}>
      {text}
    </h1>
  );
}

export default Heading;
