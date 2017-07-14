var scribble = require('scribbletune');
var fs = require('fs');
var dir = './exports';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

var bass = scribble.clip({
  notes: scribble.mode('c', 'minor'),
  pattern: 'x_-x_-x_-x'.repeat(64),
  sizzle: true,
  shuffle: true
});

scribble.midi(bass, dir + '/bass.mid');

var chords = scribble.clip({
  notes: ['e4', 'g4', 'G#m'],
  pattern: 'x_x_x_x_x-'.repeat(64),
  sizzle: true,
  shuffle: true
});

scribble.midi(chords, dir + '/chords.mid');


var chords = scribble.clip({
  notes: scribble.mode('c', 'aeolian'),
  pattern: 'x----'.repeat(128),
  sizzle: true,
  shuffle: true,
  accentMap: [100, 120, 127, 127, 127]
});
scribble.midi(chords, 'c.mid')

var scaling = scribble.clip({
  notes: ['a#2', 'b2', 'c3', 'c#3', 'c3', 'b2', 'a#2'],
  pattern: 'x_'.repeat(64),
  sizzle: true,
});

scribble.midi(scaling, 'scale.mid');

var bass2 = scribble.clip({
  notes: scribble.chord('CMaj'),
  pattern: 'x_xxxx_x____x'.repeat(64),
  sizzle: true
});

scribble.midi(bass2, 'bass2.mid');
