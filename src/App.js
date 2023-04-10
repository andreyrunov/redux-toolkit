import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, selectCount, incrementByAmount } from './redux/counterSlice'
import { setInputText, inputText } from './redux/inputSlice'
import { changeBooleanState, isBoolean } from './redux/booleanSlice'
import axios from 'axios'
import Post from './components/Post';
import { addFavoritePost, removeFavoritePost } from './redux/favoriteSlice'


function App() {
  const count = useSelector(selectCount)
  const input = useSelector(inputText)
  const boolean = useSelector(isBoolean)
  const dispatch = useDispatch()

  // берем state, обращаемся к слайсу favorites у которого есть объект (initialState, он же state с ключом favoritePosts)
  const favoritePosts = useSelector(state => state.favorites.favoritePosts)

  const isFavoritePost = post => {
    // проверяем, если в стейте favoritePosts есть хотя бы одно совпадение по id, то возвращаем этот элемент массива
    let res = favoritePosts.some(favoritePost => favoritePost == post)
    return res
  }

  const toggleFavoritePost = post => {
    if(isFavoritePost(post)) {
      dispatch(removeFavoritePost(post))
    } else {
      dispatch(addFavoritePost(post))
    }
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data); // обновляем состояние списка постов
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = (amount) => {
    dispatch(incrementByAmount(amount));
  };

  const handleChange = (text) => {
    dispatch(setInputText(text))
  }

  const handleBoolean = () => {
    dispatch(changeBooleanState())
  }

  return (
    <div className="App">
      <h2>Counter</h2>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button onClick={() => handleIncrementByAmount(5)}>+5</button>
        <button onClick={() => handleIncrementByAmount(10)}>+10</button>
      </div>
      <br />
      <h2>Текст: <br/>{input}</h2>
      <br />
      <input type="text" placeholder='Введите текст' onChange={(e) => handleChange(e.target.value)} />

      <br />
      <br />
      <button onClick={handleBoolean}>{boolean ? <h2>Правда</h2> : <h2>Ложь</h2>}</button>


      <div className='content'>
        <div className='posts'>
          <div className='wrapper'>
            {Array.isArray(data) ? data.map((el, index) => <Post post={el} toggleFavoritePost={toggleFavoritePost} isFavoritePost={isFavoritePost} key={index} id={el.id} title={el.title} body={el.body} />) : <></>} 
          </div>
        </div>
        <div className='favorites'>
          <div>Список избранного</div>
          {favoritePosts && data.map((el, index) => {
            if (favoritePosts.find((elem) => +elem === el.id)) {
              return (<><div key={index}>{`${el.id}. ${el.title}`}</div> <br /></>)
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
