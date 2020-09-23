---
tags: frontend, react
---

# React

> 組件化建構View
> 不使用template主要用js,jsx
> 不做資料綁定,單向資料流,保證資料為最新
> 不直接修改DOM,直接修改資料可以讓元素的值直接更新

## 三大框架比較

<table>
    <tr>
        <th>框架</th>
        <th>Angular</th>
        <th>Vue</th>
        <th>React</th>
    </tr>
    <tr>
        <td>開發時間</td>
        <td>Google 2010</td>
        <td>尤雨溪2014</td>
        <td>Facebook 2013</td>
    </tr>
    <tr>
        <td>架構</td>
        <td>MVVM</td>
        <td>MVVM</td>
        <td>Virtual DOM(MVC的V)</td>
    </tr>
    <tr>
        <td>優點</td>
        <td>雙向綁定(資料更新簡單)<br/>
        依賴注入（模組化）</td>
        <td>集各家特色（Angular,React）<br/>
容易整合<br/>
輕量</td>
        <td>簡單好學(js,jsx)<br/>
運用靈活<br/>
單向資料流<br/>
Virtual DOM技術(server,手機)<br/>
升級工具</td>
    </tr>
    <tr>
        <td>缺點</td>
        <td>花較多時間學習<br/>
        使用TS語法複雜<br/>
        版本變動大</td>
        <td>生態系還不夠全面（native app）</td>
        <td>沒有React百科<br/>
太靈活(解決方法太多)<br/>
JS知識需求高</td>
    </tr>
</table>


## Virtual DOM

1. 組件組合
    ```
    Model => render function => DOM Tree
                                /      \
                        Virtual DOM => Real DOM
    ```

2. 優點：
    * 初始render快
    * 大量更新快
    * 容易實作DOM以外的Render(React Native,SSR)

3. MVVM
    * 小量更新快
    * 要做若干優化,大量更新才夠快

## ES6

#### 變數 var/let/const

1. const 可以修改物件內的屬性, 不能被re-asign
2. 範圍
    - 2-1 scope 變數的有效範圍
        * function scope/global scope
        * scope由外而內繼承
    - 2-2 block 大括號刮起來的範圍
        * 由外而內繼承
3. 作用範圍
    * var:scope
    * let/const:block
        
#### 箭頭函式

context 程式執行情境
函式執行：
1. 直接執行函式 this=>window(global)
2. 物件的函式 this=>物件
3. DOM的函示 this=>DOM
箭頭函式無context 宣告的時候內部的this會是global的this

#### import/export

1. export default
    ```javascript
    export default xxx;

    import xxxz from 'file'; //名字可以不一樣
    ```

2. named export
    ```javascript
    export const yyy = 123;

    import {yyy} from 'file';//名字必須一樣
    ```
    或是用as改名
    ```javascript
    import {yyy as zzz} from 'file';
    ```

#### class 模板
> 屬性property(variable)
> 方法method(function)
> constructor建構函式指定屬性
```javascript
class Dog extends Animal{
    constructor() {
        this.age = 0;
    }
    bark() {
        console.log('woof');
    }
}

const spot = Dog();
```
使用 babel class-properties的plugin
箭頭函式的this會綁定spot
```javascript
class Dog extends Animal{
    age = 0;
    bark = () => console.log('woof');
}
```

#### 解構
```javascript
/* 陣列解構 */
const point = [1,2,3];

const x = point[0];
const y = point[1];
const z = point[2];

// ES6
const [x,y,z] = point;
const [,y] = point; // const y = point[1]; 第二個
const [x,y,x,w=0] = point; // w=0;


/* 物件解構 */
const point = {x:1,y:2,z:3};

const x = point.x;
const y = point.y;
const z = point.z;

// ES6
const {x,y,z} = point;
const {x} = point; // const x = point.x;


/* 函數解構 */
const draw = point => {
...
}

// ES6
const draw = ({x,y,z}) => {
...
}
```

#### 取值
> 用 point.x 或者 point.y 來分別取得 x 與 y 的值
> 但如果我想要寫一個函式，來取得 point 裡面的 "某個" 值
> 假設此函數傳入一個 axis 參數，這個 axis 可能等於 'x' 或 'y' 或 'z' 字串
> 那麼我們可以用 point[axis] 來取值
> 這樣當 axis = 'x' 的時候會取到 point.x，當 axis = 'y' 的時候會取到 point.y
> 
> 我們也可以用來指定新值，例如 point[axis] = 0
> 這樣當 axis = 'x' 的時候等於 point.x = 0，當 axis = 'y' 的時候等於 point.y = 0
> 
> 這其實很像陣列存取值的語法，用 array[idx] 來取得或指定 array 在 idx 位置的值
> 
> 
> 再來是當創建物件的時候
> 我們可以用 const point = { x: 1, y: 2, z: 3 } 來建立一個物件
> 裡面包含的屬性有 x, y, z
> 但如果我想要寫一個函式，來建立一個包含 "某個" 屬性的物件
> 假設此函數傳入一個 axis 值，axis 可能等於任何字串
> 那麼我們可以用 const point = { [axis]: 0 } 來動態建立一個物件
> 這樣當 axis = 'x' 的時候會建立 { x: 0 }，當 axis = 'y' 的時候會建立 { y: 0 }


```javascript
const getVector = (point, axis) => {
  return { [axis]: point[axis] };
};

// 或者寫成
// const getVector = (point, axis) => ({ [axis]: point[axis] });

const p = { x: 1, y: 2, z: 3 };
const q = getVector(p, 'x');

console.log(q); // { x: 1 }
```



#### async/await
```javascript
/* callback */
callAPI(function(result){
    console.log(result);
})

/* promise */
callAPI().then(result=>{
    console.log(result);
})

/* async/await */
const start = async () => {
    const result = await callAPI();
}

start();
```


## npm (node package manager)
#### node.js
> 可以讀取電腦的檔案
#### webpack
> 將程式編譯成瀏覽器看得懂的語法
 
## yarn
```shell
npm install -g yarn
```

1. 安裝套件
```
package.json
npm install 
npm i
yarn
```

2. 新增套件
```
npm install --save react
npm i -S react
yarn add react
```

3. 開發用套件
```
npm install --save-dev
npm i -D
yarn add -D
```

4. 移除套件
```
npm remove --save react
npm r -S 
yarn remove
```

5. 全域套件
```
npm i -g
yarn global add
```

6. 執行script
```
npm run build
yarn run build
yarn build
```


## Getting Started
[create-react-app](https://create-react-app.dev/docs/getting-started)

```shell
npx create-react-app my-app

cd my-app

npm start
```

## JSX
用JS寫HTML
1. class組件一定會有一個render的函式並且回傳JSX
2. 一定要close tag
3. 所有的tag都可以self close <div />
4. html tag的class要改成className
5. <label for="" /> 改htmlFor
6. 屬性用小駝峰命名
7. onClick={this.onClick} 
    onClick=>組件的自訂函式
    可用大括號標成值或程式
    
    
## render畫面
src/index.js webpack的進入點也是一切的起點

render(element,DOMcontainer)

## 組件基本概念
### 組件裡
1. 一定要有的**render函式** 回傳一個元素最外層一定要是一個元素
2. 生命週期函式(this一定是組件)
    * constructor
    * componentDidMount
    * componentDidUpdate(prevProps,prevState)
3. 類別的static
    * 靜態屬性state property
    * 靜態方法state method
        * getDerivedStateFromProps(nextProps,prevState)
4. 自訂函式
    * onChange
    * getData

**順序**
1. state
2. 生命週期函式
3. 自訂函式
4. render

### 三種組件
1. class component
    ```javascript
    class Child extends Component{
        render(){

        }
    }
    ```
2. stateless functional component
    > 沒有state,沒有自定義方法,只有render函式的話可以用這個
    ```javascript
    const Child = (props) =>{
        return();
    }
    ```
3. pure component
    > props,state的第一層如果一樣的話不會一直render(shallow compare)
    > 處理效能的話可以用這個
    
    ```javascript
    class Child extends PureComponent{
        render(){

        }
    }
    ```

### 事件處理及狀態
* 組件狀態state
* 更新狀態setState可以更新部分的state


### props
this.props.屬性
可以是字串也可以是{值}
夾在子組件的文字可以用**this.props.children**

* 預設props
```javascript=
// 1

Counter.defaultProps = {
  initCount: 0
}

// 2
static defaultProps = {
  initCount: 0,
}
```

* props型別
```import PropTypes from 'prop-types';```

### setState
非同步(執行完下一行不會馬上跟著變)

1. setState傳入箭頭函式
```javascript
this.setState(state=>({ //本來的state
  count:state.count+1 //新的state
}));
```

2. setState傳入callback
```javascript
sendCount =() =>{
    fetch(`/api/count?value=${this.state.count}`)
}


this.setState({
    count:this.state.count +1
})

this.sendCount();

// 改成

this.setState(
    {
      count:state.count+1
    },
    ()=>{
        this.sendCount();
    }
);

// or
this.setState(
    {
      count:state.count+1
    },
    this.sendCount);
```

### ref 屬性
1. this.refs.名 (ref="名")
2. 函式 ref={this.setRef}
3. 官方建議 createRef() **current**


## Higher-Order component(HOC)
1. 檔名命名要小寫開頭（小駝峰）型態是function
2. 傳入一個component回傳一個component
3. 要解構this.props放在最前面(蓋上層)
4. 不同的邏輯（state,函式)運用在同一個組件
5. 相同的邏輯（state,函式)運用在不同的組件

```javascript=
const withOPen = WrappedComponent => {
    return class extrends Component {
        state:{
            open:false
        };
        toggle=()=>{
            this.setState({
                open:!this.state.open
            })
        };
        render(){
            return (
               <WrappedComponent
                   {...this.props}
                   open={this.state.open}
                   toggleOpen={this.toggle}
               />
            );
        }
    }
}
export default withOpen;

// or
export default withOpen => class extrends Component {
//...
}

```

```javascript
// App.js

import Promote fromm './Promote';
import withOpen from './hocs/withOPen';

const PromoteWithOpen = withOpen(Promote);

const App = () => (
    <div>
        <PromoteWithOpen />
    </div>
);

export default App;
```

## 列表渲染
1. 陣列render：用map
2. 物件render：用Object.keys 不保證順序照宣告時的順序
    
### key屬性(JSX特有)
* 讓物件在render的時候知道跟哪個元素連結而不需重新render
* index當key無法避免重新render
* 只要在parent(前一個tag)下是unique就可以了

### 陣列內建方法
#### 不會改變原本陣列的值
1. map 傳入函式function(element,index,array) 要有回傳值
    ```javascript
    const array = [1,2,3];
    const result = array.map((elem,idx,arr) => (<li>{elem}</li>));
    ```
2. filter傳入函式function(element,index,array) 要有回傳值
    ```javascript
    const array = [1,2,3,4,5,6];
    const result = array.filter((elem,idx,arr) => {
        return elem % 2 ===0;
    });
    ```
3. reduce 匯總結果傳入(function,initial Value)不一定回傳物件
    ```javascript
    const array = [1,2,3,4,5,6];
    // 加總 = 21
    const result = array.reduce((accumalator,elem,idx,arr) => {
        return accumalator + elem;
    },0);
    // 簡化
    const result = array.reduce((acc,value) =>acc + value ,0);
    ```
    
#### 會改變陣列的值
mutate
```javascript
const array = [1,2,3,4];
array.pop(); // 4
array.push(5); // 5
array.shift(); // 1
array.unshift(0); // 0

array.reverse();
array.sort();
array.splice();

 // 複製array
const newArr = array.slice();
const newArr = [...array]
```

## css 用法
1. css module
    > 為了解決撞名問題，產生hash class name
    ```javascript
    import style from 'name.moduole.css';
    <button className={style.class} />
    ```

2. style component
    > 當成組件使用
    ```shell
    yarn add styled-compoents
    ```
    
    ```javascript
    import styled from 'styled-compoents';
    const Button = styled.cutton`background:#ced;` 
    
    <Button />
    ```

3. sass + css module
    > filename.scss => filename.module.scss
    ```shell
    yarn add node-sass
    ```

    ```javascript
    import style from 'filename.moduole.scss';
    ```
    
## 表單控制
### input/textarea
1. 僅顯示無法改變
```javascript
state = {
    text:'abc'
};

<input type="text" value={state.text} />
<h2>{text}</h2>
```
2. 雙向綁定
```javascript
state={
    text:'abc'
};
conChange=(e)=>{
    this.setState({
        text:e.target.value // 取得輸入的值
    })
};

<input type="text" value={state.text} onChange={this.onChange} />
<h2>{text}</h2>
```

### 數字
e.target.value 是字串如果是數字的話要轉換
=> parseInt(e.target.value,10)

### 下拉選單
```javascript
const relations=['父','子','母','女','妻','友'];

state={
    rel:relations[0]
};
conChange=(e)=>{
    this.setState({
        rel:e.target.value // 取得輸入的值
    })
};

<select vlaue={rel} onChange={this.onChange}>
    {relations.map((relation)=>(
        <option key={relation}>{relation}</option>
    ))}   
</select>
<h1>{rel}</h1>
```

### 單選與多選
```javascript
state={
    gender:'male',
    like:{
        male:false,
        female:false
    }
};
onChangeGender=(e)=>{
    this.setState({
        gender:e.target.value
    })
};

onChangeLike=(e)=>{
    const key = e.target.value;
    this.setState((state)=>({
        like:{
            ...state.like,
            [key]:!state.like[key]
        }
    }));
};

const {gender,like}=this.state
<div>
    Your like:
    <input 
        type="radio" 
        value="male" 
        onChange={this.onChangeGender} 
        checked={gender === 'male'} />
    <label>Male</label>
    <input 
        type="radio" 
        value="female"
        onChange={this.onChangeGender} 
        checked={gender === 'female'} />
    <label>Female</label>
</div>

<div>
    Your gender:
    <input 
        type="checkbox"
        value="male"
        onChange={this.onChangeLike} 
        checked={like.male} />
    <label>Male</label>
    <input 
        type="checkbox"
        value="female"
        onChange={this.onChangeLike}
        checked={like.female}  />
    <label>Female</label>
</div>


<div>
    <pre>{JSON.stringify(this.state,null,2)}</pre>
</div>
```

### 檔案上傳與圖片預覽
type="file" 無法使用 value
```javascript
state={
    file:null,
    img:''
};
conChange=(e)=>{
    const file = e.target.files.item(0); // File物件
    const fr = new FileReader();
    fr.addEventListener('load',this.fileLoad);
    fr.readAsDataURL(file);
    this.setState({
        file
    });
};

fileLoad=(e)=>{ // FileReader檔案讀取完的事件
    this.setState({
        img:e.target.result
    });
};

submit = () =>{
    // (1) json base64
    axios.post('/img',{img:this.state.img});
    
    // (2) multipart
    const form = new FormData();
    form.append(this.state.file);
    axios.post('/img',{form});
}

<input type="file" onChange={this.onChange} />
<img width="100%" src={this.state.img} />
<button onClick={this.submit}>Submit</button>
```

## 生命週期
### 常用的
![](https://i.imgur.com/Wm7gChl.jpg)

#### constructor
1. 一定要呼叫super（父類別）
2. 輸入的參數是props
3. 通常會指定this.state以及bind自訂函式（讓函式裡面的this永遠是組件本身）
4. 使用babel可以把自訂函式寫成箭頭函式就可以直接使用組件的this=>可以省略constructor
5. constructor 的用意就是當需要繼承一些值得時候，或是需要印一些 log 的時候，就會需要用到。而一般來說，一個 Component 並不一定會需要 constructor
6. **不要寫this.setState**直接指定this.state
7. **不要把props的值指定給state**，除非只想要拿第一次的值（不管props的值變更）
8. **不要呼叫ajax**，請寫在componentDidMount

#### render
1. 渲染：把資料轉成視覺畫面
2. 讀取this.props,this.state，一定要return一個JSX元素或是一個array,數字,字串,布林值,Portal(React 16之後)
3. **不要呼叫this.setState**，更新組件state又再render...所以會無窮迴圈
4. **不要呼叫ajax**，請寫在componentDidMount,componentDidUpdate
5. 很純粹的函式，做資料的轉換

#### componentDidMount
1. 組件第一次被render到頁面上（建立DOM）會執行的生命週期函式
3. 執行ajax的function 加 async/await,this.setState

#### componentDidUpdate
> componentDidUpdate(prevProps,prevState,snapshot)
1. 組件在每一次更新之後，state或props任一有被更新之後會執行的函式
2. **重要**要做判斷比較 prevProps.xxx!==this.props.xxx
3. getSnapshotBeforeUpdate(prevProps,prevState)
4. 可以呼叫this.setState，但是也要做condition判斷

#### componentWillUnMount 
1. component要離開（不在畫面上）之前會呼叫的函式
2. 取消監聽事件或是取消ajax的時候

### 比較不常用的生命週期
![](https://i.imgur.com/MroLfKf.png)

#### getDerivedStateFromProps
> static getDerivedStateFromProps(nextProps,prevState)
1. 組件第一次被render及更新的時候會呼叫的函式
2. 靜態函式，不會跟著組件，所以沒有this可以用
3. 每次props變動算出新的props
4. 立即回傳新的state或是null(state沒有變更的話)
5. 不能做async
6. 每一個生命週期mounted/props update/state update 都會被執行
7. 比較常使用在復原預設值(但也可以用componentDidUpdate達到)


#### shouldComponentUpdate
> shouldComponentUpdate(nextProps,nextState)
1. 控制組件要不要更新的時候（更新的時機）
2. return 布林值 預設總是回傳true
3. 在state被改變之後render之前才會被呼叫
4. 如果是回傳false就不會執行下面的render, componentDidUpdate
5. PureComponent的效能比較好是因為有內建用shouldComponentUpdate做舊的props跟新的props比較是不是都一樣，如果都一樣就不render
6. 沒必要使用太複雜的比較，如果用了太複雜的比較的話，說不定比較浪費的資源會比 re-render 的資源還多，所以優化實際上沒這麼好做，很多時候都還是要多重比較比較好。

#### getSnapshotBeforeUpdate
> getSnapshotBeforeUpdate(prevProps,prevState)
1. 更新時，在render之後，頁面上的DOM實際變更之前會執行的函式
2. 用於比較組件render前後的狀態
3. return的值會在componentDidUpdate的snapshot拿到

## React 16
### render
1. render可以回傳陣列`[<h1></h1>,<div></div>]`
2. Fragment （片段）組件形式 頁面上不會出現，等同於包裝陣列元素
3. 有些組件限制只能回傳一個元素（不能用陣列）就可以使用Fragment
4. <Fragment></Fragment>設定babel可以容許只顯示<></>

### 錯誤處理
1. 開發階段會顯示錯誤訊息，但如果已經打包成產品會是空白畫面
2. 僅處理生命週期函式內的錯誤，在App組件中可以使用getDerivedStateFromError,componentDidCatch
    ```javascript
    state={
        hasError:false
    }
    // 在有錯誤時會被呼叫，畫面的顯示（視覺靜態改變）
    static getDerivedStateFromError(error){
        return {hasError:true};
    }
    // 在有錯誤時會被呼叫，可以傳送錯誤訊息給後端，或是導頁（副作用）
    componentDidCatch(error,info){
        axios.post('/api/log',{info});
    }
    render(){
        if(this.state.haseError){
            return '錯誤畫面';
            }
        }
        return <div></div>;
    }
    ```
3. Promise的錯誤則不包含在這

### Portal
1. 可以分別render在不同的div裡面
    ```HTML
    <div id="app"></div>
    <div id="modal"></div>
    ```
    
    ```javascript
    import {createPortal} from 'react-dom';

    render(){
        return createPortal(
            <div>LessonModal</div>,
            document.getElementById('modal')
        )
    }

    ```
2. 比較常用在跳出視窗的時候

### Context API
1. 資料與畫面視覺綁定造成組件異動時維護麻煩
2. 所以需要跨組件溝通的方式(Redux)
    ```javascript=
    // 模組 OrderContext.js
    import {createContext} from 'react';

    const context = createContext(defalutValue);

    export default context;

    // or
    export const {Provider,Consumer} = createContext({
        orders:[],
        addOrder:()={}
    });
    ```

    ```javascript
    // 上層組件import 使用context
    <OrderContext.Provider value=>
        子組件（情境）
    </OrderContext.Provider>
    // or 
    <Provider>
    </Provider>


    // 在子組件裡面使用
    <OrderContext.Consumer>
       {function} 
    </OrderContext.Consumer>
    // or 
    <Consumer>
    </Consumer>
    ```

## React Hook
1. 16.8之後
2. 函式型組件
3. 不會破壞結構
4. 有狀態的邏輯
5. 組織相同邏輯放在同一個地方
6. 可以用hooks代替class component

### useState
> 傳統functional component無法使用state
> useState 傳入初始狀態回傳陣列[目前狀態,狀態的函式]狀態不限任何型態
> 不能用在邏輯判斷,要寫在最一開始
以counter組件為例
```javascript
import React,{useSate} from 'react';

const App = () => {
  const [count,setCount] = useState(0); 
  const addCount = () =>{
    // 可以傳入數值 
    // setCount(count+1);
    // or 可以傳入function 傳舊的state 回傳新的state
    setCount(c=> c+1);
  };
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>Add
      </button>
    </div>
  )
}
```
使用回傳setState時傳入的參數不能是partial state必須要合成最後的完整state
```javascript
import React,{useSate} from 'react';

const UseSateCounter = () => {
  const [{count1,count2},setState] = useState({count1:0,count2:0}); 
  
  const addCount1 = () =>{
    setState(state=>({...state,count1:state.count1+1}));

  const addCount2 = () =>{
    setState(state=>({...state,count2:state.count2+1}));
  };
  
  return(
    <div>
      <h3>count1:{count1}</h3>
      <h3>count2:{count2}</h3>
      <button onClick={addCount1}>Add Count1</button>
      <button onClick={addCount2}>Add Count2</button>
    </div>
  )
}
```

### useEffect
> componentDidMount時fetch在render顯示的class component
> 每次render的時候都會被執行,可以用第二個參數[]判斷是不是需要執行
> [] 每次執行都是空陣列 第一次呼叫（沒有傳）的時候會不一樣 就會判斷只有第一次才會執行 = componentDidMount
> 忘記傳[]會一直執行=componentDidUpdate
> return的另一個函式(componentWilUnMount)清理函式
1. 判斷這次輸入的陣列跟上次是不是一樣（一樣繼續）
2. 執行上一次儲存的清理函式
3. 執行裡面的內容
4. 把return的清理函式存起來下次可以用

以fetch data為例
```javascript=
import React,{useState,useEffect} from 'react';

const FetchUserUseEffect =() => {
const [state,setState] = useState({
  email:'',
  picture:
});

useEffect(()=>{
  fetch('https://randomuser.me/api/')
    .tehn(re=>re.json())
    .then(data=>{
      const [user] = data.results;
      setState({
        email:user:email,
        picture:user.picture.medium
      });
  });
},[]);

const {email,picture} = this.state;
return(
  <div>
    <img src={picture} />
    <div>{email}</div>
  </div>
);
}
```
清理函式(componentWilUnMount)
```javascript=
import React,{useEffect} from 'react';

const UseEffectFetch =() => {
  useEffect(()=>{
    const onScroll =()=>{};
    window.addEventListener('scrll',onScroll);
    return()=>{
      window.removeEventListener('scrll',onScroll);
    };
  });
  return <div />;
}

export default UseEffectFetch;
```

### useContext
> context API
> 呼叫並傳入context（有執行createContext回傳的context）回傳包含這個組件最近的provider的contextValue=consumer
> provider不變 一定是要由context提供的provider
> 可以在functional component取得context

以原本用class component的context API為例
```javascript=
// context.js
import {createContext} from 'react';
const context = createContext();
export const {Provider,Consumer} = context;
export default context;
```

```javascript=
// UseContextOpen.js
import React,{useState} from 'react';
import UseContextOpenButton from './UseContextOpenButton';
import {Provide} from './context';

const UseContextOpen =()=>{
  const [open,setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  const contextValue ={
    open,
    toggle,
  };
  
  return (
    <Provider value={contextValue}>
      <div>
        <UseContextOpenButton />
        {open && <div>Some Context</div>}
      </div>
    </Provider>
  ) 
}

export default UseContextOpen;
```

```javascript=
// UseContextOpenButton.js
import React,{Component} from 'react';
import {Consumer} from './context';

class UseContextOpenButton extends Component {
  render(){
    return(
      <Consumer>
        {({open,toggle})=>(
          <button onClick={toggle}>{open?'Close':'Open'}</button>
        )}
      </Consumer>
    );
  }
}

export default UseContextOpenButton;
```
改成useContext 就不用 consumer
```javascript=
import React,{useContext} from 'react';
import context from './context';

const UseContextOpenButton =()=> {
  const {open,toggle} = useContext(context);
  
  return <button onClick={toggle}>{open?'Close':'Open'}</button>;
};

export default UseContextOpenButton;
```

### useRef
> 呼叫createRef時，每次render都會建立一個新的ref（物件）
> 第一次呼叫的時候建立一個新的ref物件，之後都回傳之前建立的那個ref物件
> 除了可以取代DOM的ref之外還可以取代class component的instance variable
> useRef 跟著組件的實例

以conponentDidMount時input focus為例
```javascript=

import React,{Component,createRef} from 'react';

class UseRefFocus extends Component {
  const ref = createRef();
  
  conponentDidMount(){
    this.ref.current.focus();
  }
  
  return <input ref={ref} />;
}

export default UseRefFocus;
```
改用useEffect及createRef
```javascript=

import React,{useEffect,createRef} from 'react';

const UseRefFocus =()=>{
  const ref = createRef();
  
  useEffect(()=>{
    ref.current.focus();
  },[]);
  return <input ref={ref} />;
}

export default UseRefFocus
```
固定ref（不能每次都是新的物件）
以counter為例
```javascript=
import React,{useState,useRef} from 'react';

const UseRefCounter =()=>{
  const [count,setCount] = useState(0);
  const ref = useRef({});
  const startCounter =() =>{
    ref.current = setInterval(()=>setCount(c=>c+1),100);//儲存在組件的實例裡面
  }
  const stopCounter =() =>{
    clearInterVal(ref.current);
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCounter}>Start</button>
      <button onClick={stopCounter}>Stop</button>
    </div>
  );
}

export default UseRefCounter
```

### 其他hooks
* useReducer = useState + Redux reducer
* useCallback = useEffect
* useMemo = useEffect
* useImperativeHandle 上層組件找到下層組件的custom method使用
* useLayoutEffect = useEffect 但會阻擋視覺更新 useEffect是在視覺更新之後才去執行裡面的內容函式
* useDebugValue 放在custom hooks用來debug


---
# Redux
https://chentsulin.github.io/redux/index.html
https://kknews.cc/zh-tw/code/zy9ybop.html
https://www.ucamc.com/e-learning/javascript/304-react-redux-how-work
https://www.ucamc.com/e-learning/javascript/305-redux%E5%81%9A%E4%BB%80%E9%BA%BC%E4%BB%80%E9%BA%BC%E6%99%82%E5%80%99%E6%87%89%E8%A9%B2%E4%BD%BF%E7%94%A8%E5%AE%83.html



---
# React vs Vue
1. 視覺差異
2. JSX只需要{}放值寫起來幾乎與HTML無差異
3. 需要遵守Vue的template跟規則
4. 值的改變 :
    * react是用新的狀態取代狀態
    * vue用mutation改變值
5. React的其他package: redux,alt,reflux,context

---
# 其他

### window 
```javascript
window.scrollY; // 滾輪在哪
window.innerHeight; // 整體高度
window.body.scrollHeight // 總共可以捲多高

scrollY + innerHeight >= body.scrollHeight // 滾到底
```
