var exec = require('child_process').exec;
var args = process.argv;
var script = args[2];

console.log('running: ' + script);

exec('casperjs ' + script, function callback(error, stdout, stderr) {
  var casper_output = JSON.parse(stdout);

  // put casper_output in a mongo collection here pr0b4bly
  console.log(casper_output);
  console.log('w0w');
});
