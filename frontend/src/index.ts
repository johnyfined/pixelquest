import hi from './hello/hello.js';
declare const io: typeof import('socket.io');

const socket = io('http://localhost:7000');

socket.emit('hello');
socket.on('connect', () => console.log('connexted!!!'));
console.log('start!!sa!');
hi();

