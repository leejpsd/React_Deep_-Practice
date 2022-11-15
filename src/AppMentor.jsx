/// 전개연산자를 이용한 중첩 객체 상태관리하기

import React, { useState } from "react";

export default function AppMentor(props) {
  const [person, setPerson] = useState({
    name: "알린",
    title: "개발자",
    mentor: {
      name: "우디",
      title: "시니어개발자",
    },
  });

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const newName = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: newName },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const newTitle = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title: newTitle },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
