const imageNames = [
  ...Array.from({ length: 123 }, (_, index) => `0O5A${1826 + index}.jpg`)
    .filter(name => name !== '0O5A1869.jpg')
];
const musicTracks = [1, 3, 5, 7, 9];
const images = imageNames.map((name, index) => ({
  name,
  path: `img/Select/${name}`,
  number: index + 1,
  music: `music/track${musicTracks[index % musicTracks.length]}.mp3`
}));
