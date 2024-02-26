export const get_time_diff = (datetime) => {
  var datetime =
    typeof datetime !== "undefined" ? datetime : "2022-10-01 01:02:03.123456";

  var datetime = new Date(datetime).getTime();
  var now = new Date().getTime();

  if (isNaN(datetime)) {
    return "";
  }

  if (datetime < now) {
    var milisec_diff = now - datetime;
  } else {
    var milisec_diff = datetime - now;
  }

  var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
  var hours = Math.floor(milisec_diff / 1000 / 60 / 60);
  var minutes = Math.floor(milisec_diff / (1000 * 60));
  var sec = Math.floor(milisec_diff / 1000);

  var date_diff = new Date(milisec_diff);
  if (days) {
    return (days == 1 ? days + " Day" : days + " Days") + " ago";
  } else if (hours) {
    return (hours === 1 ? hours + " Hour" : hours + " Hours") + " ago";
  } else if (minutes) {
    return (minutes === 1 ? minutes + " Minute" : minutes + " Minutes") + " ago";
  } else {
    return (sec === 1 ? sec + " Second" :  sec + " Seconds") + " ago";
  }
};
