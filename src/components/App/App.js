import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import data from "../data.json";
import options from '../data/color.json';
// import recipes from "../Recipes/recipes.json";
// import PaintingList from "../Painting/PaintingList";
// import RecipesList from "../Recipes/RecipesList";
import { Layout } from '../Layout/Layout.styled';
import { Global } from '@emotion/react';
import { emotionReset } from '../Global/Global.styled';

import Counter from '../Counter';
import Dropdown from '../Dropdown/Dropdown';
import ColorPicker from '../ColorPicker/ColorPicker';
import TodoList from '../TodoList';
import Modal from '../Modal/Modal';
import Form from '../Form';
import PokemonForm from '../Fetch Pokemon/Form';
import { PokemonInfo } from '../Fetch Pokemon/PokemonInfo';
import NewsForm from '../FetchNews/NewsForm';
import NewsList from '../FetchNews/NewsList';

class App extends Component {
  state = {
    todo: [
      {
        id: 'id-1',
        name: 'Learn React.js',
        completed: false,
      },
      { id: 'id-2', name: 'Find job', completed: false },
      {
        id: 'id-3',
        name: 'Go for vacation to Tunisia',
        completed: false,
      },
    ],

    modalActive: false,
    firterValue: '',
    irterValue: '',
    pokemonName: '',
    newsSearchValue: '',
  };

  deleteToDo = toDoId => {
    this.setState(prevState => ({
      todo: prevState.todo.filter(toDoItem => toDoItem.id !== toDoId),
    }));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modalActive: !prevState.modalActive,
    }));
  };

  //  при зміні стану по кліку на input[checkbox] первірити якщо id по якому клікнули і передали свівпадає в map
  //з одним з id з масиву тоді в satate повернути новий  обєкт в якому розпилити старий обєкт і додай нову властивість
  // нову змінену властивість complited
  // якщо input checked замінити стилі
  // або якщо не співпадає повернути старий  57 рядок

  // ToggleComplete = todoID => {
  //   this.setState(prevState => ({
  //     todo: prevState.todo.map(todoItem => {
  //       if (todoItem.id === todoID)
  //         return {
  //           ...todoItem,
  //           completed: !todoItem.completed,
  //         };
  //       return todoItem;
  //     }),
  //   }));
  // };

  addTodo = text => {
    const newTodo = {
      id: 'id-4',
      name: text,
      completed: false,
    };

    this.setState(prevState => ({
      todo: [newTodo, ...prevState.todo],
    }));
  };
  ToggleComplete = todoID => {
    this.setState(({ todo }) => ({
      todo: todo.map(todoItem =>
        todoItem.id === todoID ? { ...todoItem, completed: !todoItem.completed } : todoItem
      ),
    }));
  };

  addImgUrl = url =>
    this.setState({
      selectedImg: url,
    });
  formSubmitHandler = data => {
    console.log(data);
  };
  handelFilterChange = event => {
    this.setState({
      firterValue: event.currentTarget.value,
    });
  };

  // hendelInputChange = (event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ inputValue: event.currentTarget.value });
  // };

  // hendelNameChange = (event) => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };
  getNameFromInput = name => {
    // робим перевірку щоб не записувати путий рядок в стейт і не відпрвляти пустий http записувати

    this.setState({
      pokemonName: name,
    });
  };

  // отрисуєм значення інпуту форми і записуєм  в стейт
  // далі передамо в компонент який робитиме запит на бекенд
  getValueForNewsFetch = value => {
    this.setState({ newsSearchValue: value });
  };
  render() {
    const normalizeFilterValue = this.state.firterValue.toLowerCase();
    const filteredTodo = this.state.todo.filter(item =>
      item.name.toLowerCase().includes(normalizeFilterValue)
    );

    return (
      <Layout>
        <ToastContainer autoClose={2000} hideProgressBar={true} />
        <div
          style={{
            background: '',
          }}
        >
          <NewsForm getValueForNewsFetch={this.getValueForNewsFetch}></NewsForm>
          <NewsList newsSearchValue={this.state.newsSearchValue} />
        </div>

        {/* <PokemonForm onSubmit={this.getNameFromInput} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <Dropdown
          toggleModal={this.toggleModal}
          addImgUrl={this.addImgUrl}
        />
        <Form FormSubmit={this.formSubmitHandler} />
        {this.state.modalActive && (
          <Modal
            toggleModal={this.toggleModal}
            selectedImg={this.state.selectedImg}
          />
        )}
        <Counter startValue={1} />
        <TodoList
          onFilterEnter={this.handelFilterChange}
          value={this.state.firterValue}
          addTodo={this.addTodo}
          todo={filteredTodo}
          deleteToDo={this.deleteToDo}
          ToggleComplete={this.ToggleComplete}
        />
        <ColorPicker options={options} /> */}
        <Global styles={emotionReset} />
        {/* <PaintingList items={data} /> */}
        {/* <RecipesList items={recipes} /> */}
      </Layout>
    );
  }
}
export default App;
