import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import TodoList from "./components/ToDoList";
import AddItem from "./components/AddItem";
import "./index.css";

const initialItems = [
  { text: "Learn JS", important: true, done: false, id: 1 },
  { text: "Drink tea", important: false, done: false, id: 2 },
  { text: "Learn React", important: true, done: false, id: 3 },
  { text: "Learn Typescript", important: true, done: false, id: 4 },
]

class App extends Component {
  state = {
    items: initialItems,
    filteredItems: initialItems,
    doneMode: false,
    importantMode: false,
  };



  searchAllHandler = () => {
    this.setState({
      filteredItems: this.state.items
    })
  }

  searchBtnHandler = (doneMode, importantMode) => {
    if (doneMode && importantMode) {
      this.setState({
        filteredItems: this.state.items.filter(el => el.done && el.important),
        doneMode: false,
        importantMode: false
      })
    } else if (doneMode) {
      this.setState({
        filteredItems: this.state.items.filter(el => el.done),
      })
    } else if (importantMode) {
      this.setState({
        filteredItems: this.state.items.filter(el => el.important),
      })
    }
    return
  }

  doneFilterHandler = () => {
    const newDoneMode = true;
    this.setState({
      doneMode: newDoneMode
    })
    this.searchBtnHandler(newDoneMode, this.state.importantMode)

  }

  importantFilterHandler = () => {
    const newImportantMode = true
    this.setState({
      importantMode: newImportantMode
    })
    this.searchBtnHandler(this.state.doneMode, newImportantMode)
  }

  searchHandler = (text) => {
    console.log(text)
    this.setState(({ items }) => {
      return {
        filteredItems: items.filter(el => el.text.toLowerCase().includes(text.toLowerCase()))
      }
    })
  }

  doneHandler = (id) => {
    function mapper(el) {
      if (el.id === id) {
        return {
          ...el,
          done: !el.done
        }
      }
      return el
    }

    this.setState(({ filteredItems, items }) => ({
      filteredItems: filteredItems.map(mapper),
      items: items.map(mapper)
    }))
  }


  importantHandler = (id) => {
    function mapper(el) {
      if (el.id === id) {
        return {
          ...el,
          important: !el.important
        }
      }
      return el
    }
    this.setState(({ items, filteredItems }) => {
      return {
        filteredItems: filteredItems.map(mapper),
        items: items.map(mapper)
      }
    })
  }

  AddItemHandler = (text) => {
    const id = this.state.items.length
      ? this.state.items[this.state.items.length - 1].id + 1
      : 1;
    const newItem = {
      text,
      id,
      important: false,
    };

    this.setState((prevState) => {
      const res = [...prevState.items, newItem]
      return {
        filteredItems: res,
        items: res
      };
    });
  };

  deleteHandler = (id) => {
    this.setState(({ filteredItems }) => {
      console.log(id, filteredItems)
      const idx = filteredItems.findIndex((el) => el.id === id);
      const res = [...filteredItems.slice(0, idx), ...filteredItems.slice(idx + 1)]

      return {
        filteredItems: res,
        items: res
      };
    });
  };

  editHandler = (id, value) => {
    this.setState({
      filteredItems: this.state.items.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            text: value,
          };
        }
        return el;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          done={this.state.items.reduce((acc, el) => {
            return acc + (el.done ? 1 : 0)
          }, 0)}
          important={this.state.items.reduce((acc, el) => {
            return acc + (el.important ? 1 : 0);
          }, 0)} />
        <div className="main">
          <Search filteredItemsLength={this.state.filteredItems.length} searchAllHandler={this.searchAllHandler} doneFilterHandler={this.doneFilterHandler} importantFilterHandler={this.importantFilterHandler} searchHandler={this.searchHandler} />
          <TodoList
            items={this.state.filteredItems}
            doneHandler={this.doneHandler}
            importantHandler={this.importantHandler}
            deleteHandler={this.deleteHandler}
            editHandler={this.editHandler}
          />
          <AddItem AddItemHandler={this.AddItemHandler} />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
