var scribble = require('scribbletune');
var fs = require('fs');
var dir = './exports';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

var s_01 = scribble.clip({
  notes: scribble.mode('c', 'minor'),
  pattern: '-x_-x_-x_-x_'.repeat(64),
  sizzle: true
});
scribble.midi(s_01, dir + '/s_01.mid');

var s_02_pattern = 'x_x_x-'.repeat(6) + 'xxx___'
var s_02 = scribble.clip({
  notes: ['e4', 'g4', 'G#m'],
  pattern: s_02_pattern.repeat(64)
});
scribble.midi(s_02, dir + '/s_02.mid');


var s_03 = scribble.clip({
  notes: scribble.mode('c', 'aeolian'),
  pattern: 'x----'.repeat(128),
  sizzle: true,
  accentMap: [100, 120, 127, 127, 127]
});
scribble.midi(s_03, dir + '/s_03.mid')


var s_04 = scribble.clip({
  notes: ['a#2', 'b2', 'c3', 'c#3', 'c3', 'b2', 'a#2'],
  pattern: 'x_'.repeat(64),
  sizzle: true
});
scribble.midi(s_04, dir + '/s_04.mid');


var s_05 = scribble.clip({
  notes: scribble.chord('CMaj'),
  pattern: 'x_xxxx_x____x'.repeat(64),
  sizzle: true
});
scribble.midi(s_05, dir + '/s_05.mid');
