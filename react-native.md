# react native

## TextInput

- onChangeText 接收一个函数，这个函数在文本变化时调用
- onSubmitEditing 接收一个函数，这个函数在文本被提交时调用

## ScrollView

> 简单粗暴地把所有子元素一次性全部渲染出来

- horizontal

## FlatList SectionList

> FlatList 垂直的滚动列表，优先渲染屏幕可见的元素

- data 数据源
- renderItem 设定好的格式

```jsx
export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
```

> SectionList 要分组的数据

- sections [Array] 数据源，类型为数组
- renderItem 返回 section 中每个小的 Item
- renderSectionHeader 返回每个 Section 的标志性头部
- refreshing [Boolean] 是否处于刷新状态
- onRefresh 通过函数改变 refreshing 从而控制是否刷新
- ItemSeparatorComponent item之间的分隔线组件，不会出现在第一行之前和最后一行之后
- SectionSeparatorComponent 每个section之间的分隔组件
- ListHeaderComponent SectionList头部组件
- ListFooterComponent SectionList尾部组件
- keyExtractor 默认情况下每个item都需要提供一个不重复的key属性，因此可以通过keyExtractor函数为每一个item生成一个唯一的key
- onEndReached 是否到达底部，在默认情况下会有一个默认的distanceFromEnd临界值。可以通过此属性来达到上拉加载的效果
- onEndReachedThreshold [number] 调用onEndReached之前的临界值，单位是像素

> 注意：为了优化内存占用同时保持滑动的流畅，列表内容会在屏幕外异步绘制。这意味着如果用户滑动的速度超过渲染的速度，则会先看到空白的内容。这是为了优化不得不作出的妥协，目前官方也在改进中。

```jsx
export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    );
  }
}
```

## fetch

```jsx
getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}
```

ES7 的语法：

```jsx
// 注意这个方法前面有async关键字
async getMoviesFromApi() {
  try {
    // 注意这里的await语句，其所在的函数必须有async关键字声明
    let response = await fetch('https://facebook.github.io/react-native/movies.json');
    let responseJson = await response.json();
    return responseJson.movies;
  } catch(error) {
    console.error(error);
  }
}
```

## WebSocket

```jsx
var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
  // 打开一个连接

  ws.send('something'); // 发送一个消息
};

ws.onmessage = (e) => {
  // 接收到了一个消息
  console.log(e.data);
};

ws.onerror = (e) => {
  // 发生了一个错误
  console.log(e.message);
};

ws.onclose = (e) => {
  // 连接被关闭了
  console.log(e.code, e.reason);
};
```

## React Navigation
