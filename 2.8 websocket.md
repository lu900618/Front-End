# websocket

- websocket使用ws或wss协议 [ws协议](http://blog.csdn.net/neco2011/article/details/52766197)
- websocket是一个持久化协议，相对于http这种费持久化的协议来说，websocket api 最伟大之处在于服务器和客户端可以在给定的时间范围内的任意时刻，相互推送消息。
- websocket并不限于以Ajax或xhr方式通信，因为Ajax技术需要客户端发起请求，而websocket服务器和客户端可以彼此相互推送消息；xhr受到域的限制，而websocket允许跨域通讯。

```javascript
// 创建一个Socket实例
var socket  = new WebSocket('ws://localhost:8080')
// 打开Socket
socket.onopen = function (event) {
  // 发送一个初始化消息
  socket.send('I am the client and I\'m listening!')
  // 监听消息
  socket.onmessage = function (event) {
    console.log('Client received a message', event)
  }
  // 监听Socket的关闭
  socket.onclose = function (event) {
    console.log('Client notified socket has closed', event)
  }
  // 关闭Socket
  // socket.close()
}
```
