$(document).ready(() => {
  console.log('hello')


  const protocol = document.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
  const webSocket = new WebSocket(protocol + location.host);

  webSocket.onmessage = function onMessage(message) {
    try {
      const messageData = JSON.parse(message.data);

      console.log(messageData);

      
    } catch (err) {
      console.error(err);
    }
  };
});
