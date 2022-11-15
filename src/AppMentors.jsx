// 배열 상태 관리 하기

import React, { useState } from "react";
import { useReducer } from "react";
import personReducer from "./reducer/personReducer";

const initialState = {
  name: "알린",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initialState);

  const changeName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };

  const addMentor = () => {
    const name = prompt(`추가할 이름은?`);
    const title = prompt(`추가할 타이틀은?`);
    dispatch({ type: "added", name, title });
  };

  const deleteMentor = () => {
    const name = prompt(`누구의 이름을 삭제하고 싶은가요?`);
    dispatch({ type: "deleted", name });
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeName}>멘토의 이름을 바꾸기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토삭제하기</button>
    </div>
  );
}
