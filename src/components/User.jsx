import React from "react";
import { Link, useParams, Switch, Route, useRouteMatch } from 'react-router-dom';

export default function User({users}) {

  const userID = useParams();
  // console.log(users)
  // console.log(userID);
  const name = users.filter(user => user.id == Number(userID.id))[0].name.split(' ')[0];
  const surname = users.filter(user => user.id == Number(userID.id))[0].name.split(' ')[1];
  const phone = users.filter(user => user.id == Number(userID.id))[0].phone.split(' ')[0];

  return (
    <>
      <div className="user-photo">
        <img className="photo" src="" alt="image" />
      </div>
      <p className="user-name">{name}</p>
      <p className="user-surname">{surname}</p>
      <p className="user-phone">{phone}</p>
    </>
  );
}
