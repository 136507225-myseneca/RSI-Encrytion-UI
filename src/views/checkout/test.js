// const { v4: uuidv4 } = require("uuid");
// var id;
// id = uuidv4();
// console.log(id);
var QRCode = require("qrcode");

// QRCode.toDataURL("I am a pony!", function (err, url) {
//   console.log(url);
// });

// QRCode.toDataURL('I am a pony!')
//   .then(url => {
//     console.log(url)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// QRCode.toString(
//   "JDtGnpWFGHmOcdWG3jV5arvf158kmCj2JQd8huM0Y2tZ+J23i5rYC3q8aUnGf9SI7BaSIQhRd6I5jtFzOQbH39oBDriXwtTgMxseGm7RBQVhKVs7jkW+BsOJjPVhVjBi9FA31Nqhe0GsNHGvMj5j1d+Cwsr1f03a8/O7zBqF4KQ=",
//   { type: "terminal" },
//   function (err, url) {
//     console.log(url);
//   }
// );
QRCode.toFile(
  "qrcode.png",
  "JDtGnpWFGHmOcdWG3jV5arvf158kmCj2JQd8huM0Y2tZ+J23i5rYC3q8aUnGf9SI7BaSIQhRd6I5jtFzOQbH39oBDriXwtTgMxseGm7RBQVhKVs7jkW+BsOJjPVhVjBi9FA31Nqhe0GsNHGvMj5j1d+Cwsr1f03a8/O7zBqF4KQ=",
  {
    color: {
      dark: "#010599FF",
      light: "#FFBF60FF",
    },
  },
  function (err) {
    if (err) throw err;
    console.log("done");
  }
);
