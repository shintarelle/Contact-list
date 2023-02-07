import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, Switch, Route, useRouteMatch } from 'react-router-dom';
import User from "../components/User";
import UserForm from "../components/UserForm";

// const ulStyle = { listStyle: "none" };


export default function MainPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false)

  // const userID = useParams();

  useEffect(() => {
    async function getData() {
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setUsers(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    getData()
  }, []);

  const handleDeleteUser = (e) => {
    console.log('delete', e);
  }

  if (error) {
    return <div>Error...: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isShowForm) {
    console.log(isShowForm)
    console.log(users)
    return (
      <>
        <div className="contact-wrapper">
          <div className="contact-list">
            <h1>Contact List</h1>
            <table>
              <tbody>
                {users.map(user => {
                  return (
                  <tr key={user.id}>
                    <td className="cell">{user.name.split(' ')[0]}</td>
                    <td className="cell">{user.name.split(' ')[1]}</td>
                    <td className="cell">{user.phone.split(' ')[0]}</td>
                    <td className="cell"><button>show</button></td>
                    <td className="cell"><Link className="cell" to={`/${user.id}`}><button onClick={(e) => handleDeleteUser(e)}>Show</button></Link></td>
                    <td className="cell"><button onClick={(e) => console.log(e)}>Delete</button></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
            <div className="form-wrapper">
              <UserForm setIsShowForm={setIsShowForm} setUsers={setUsers} />
            </div>
          </div>
          <div className="contact-user">
            <Switch>
              <Route exact path={"/:id"}>
                {/* <User users={users} /> */}
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="contact-wrapper">
          <div className="contact-list">
            <h1>Contact List</h1>
            <table>
              <tbody>
                {users.map(user => {
                  return (
                  <tr key={user.id}>
                <Link className="cell" to={`/${user.id}`}>
                    <td className="cell">{user.name.split(' ')[0]}</td>
                    <td className="cell">{user.name.split(' ')[1]}</td>
                    <td className="cell">{user.phone.split(' ')[0]}</td>
                    <td className="cell"><button>Delete</button></td>
                </Link>
                  </tr>
                )
              })}
              </tbody>
            </table>
            <button className="btn-show-form" onClick={setIsShowForm}>Show Form</button>
            <div className="form-wrapper"></div>
          </div>
          <div className="contact-user">
            <Switch>
              <Route exact path={"/:id"}>
                {/* <User users={users} /> */}
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}
