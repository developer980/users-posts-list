import React from "react";
import PostList from "./components/PostList";
import "./App.css";
import PostItem from "./components/PostItem";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import AddUsersForm from "./components/AddUsersForm";
import { buildQueries } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "posts",
      users: [],
      posts: [],
    };
    //  this.state = backgroundColor
  }
  render() {
    return (
      <div className="div">
        <nav>
          <div className="nav-left">
            <h1 class="title">Topics</h1>
          </div>
          <div className="button-section">
            <button
              class="option"
              onClick={(event) => {
                this.switch_toUsers(event);
              }}
            >
              Users
            </button>
            <button
              class="option"
              onClick={(event) => {
                this.switch_toPosts(event);
              }}
            >
              Posts
            </button>
          </div>
          <div className="nav-right">
            {this.state.content == "posts" ? (
              <input
                className="bar-input"
                type="search"
                placeholder="Search posts"
              />
            ) : (
              <input
                className="bar-input"
                type="search"
                placeholder="Search users"
              />
            )}
            <button
              class="bar-button"
              onClick={(event) => {
                this.switch_toForm(event);
              }}
            >
              Sign up
            </button>
          </div>
        </nav>
        <section>
          {this.state.content == "posts" ? (
            <PostList posts={this.state.posts} />
          ) : null}
          {this.state.content == "users" ? (
            <div className="users-content">
              <UserList users={this.state.users} />
            </div>
          ) : null}
          {this.state.content == "form" ? (
            <div>
              <AddUsersForm
                addUser={(event, name, email) =>
                  this.addUser(event, name, email)
                }
              />
            </div>
          ) : null}
        </section>
      </div>
    );
  }

  componentDidMount() {
    const url1 = "https://jsonplaceholder.typicode.com/posts";
    fetch(url1)
      .then((response1) => response1.json())
      .then((data1) => {
        this.setState({ posts: data1 });
      });

    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      }); /**/
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  switch_toPosts(event) {
    this.setState({ content: "posts" });
  }
  switch_toUsers(event) {
    this.setState({ content: "users" });
  }
  switch_toForm(event) {
    this.setState({ content: "form" });
  }

  getMaxId(users) {
    let mId = 0;

    users.forEach((user) => {
      if (user.id > mId) {
        mId = user.id;
      }
    });
  }

  addUser(event, name, email) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users),
            name,
            email,
          },
        ],
      };
    });

    this.setState({ content: "users" });
  }
}

export default App;
