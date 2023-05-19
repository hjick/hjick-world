# emotion-shouldForwardProps

### 에러 상황

emotion styled 로 작업을 하던 도중 custom props 'active' 를 넘기는 과정에서 브라우저 콘솔에 해당 에러 메세지가 출력되었다.  
처음에는 active 의 타입 선언이 잘 안되어 있는 줄 알았는데 잘 되어있어서 한참 헤맸다.

<img src="/img/debugging/emotion-shouldForwardProps
.png" width="100%" />

## 해결

element에 custom props 를 넘기면 **DOM 에도 똑같이**

`<a active="땡땡">`

**이런식으로 추가가 되는데 해당 element에는 active attribute 가 없어서 생기는 에러**였다.  
찾아보니 emotion 에서는 shouldForwardProp 으로 해당 element가 가지고 있는 attribute 인지 아닌지 명시해주는 작업을 해야했고,
styled-components 는 custom prop 앞에 $ 를 달아주어 해결하고 있었다.

#### emotion

```js
const Component =
  styled(Element, {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'active',
  }) <{ active: boolean }>
```

#### styled-components

```js
const Component =
  styled(Element)<{ $active: boolean } >
```

#### 반성

$props 형태를 보니 1-2년 전쯤에 styled-components 를 처음 쓸 때 마주했던 에러였다는게 생각이 났다.  
물론 그때는 emotion은 써보지 않아서 몰랐지만 한번 해결한 에러였다는 생각을 하니, 그 당시 완벽하게 이해하지 못하고 넘어갔었던 것 같기도 하고  
내 방식대로 기록을 안해둬서 쉽게 잊었던 것 같기도 해서 조금 자책감이 들었다.

앞으로는 에러를 마주치고 새롭게 무언가를 알게 될 때마다 꼭 여기에 기록하려 한다.
