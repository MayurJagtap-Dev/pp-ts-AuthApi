import { useState } from "react";

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: "https://reactjs.org",
    text: "react docs",
  },
  {
    id: 2,
    url: "https://reactrouter.com",
    text: "react router docs",
  },
  {
    id: 3,
    url: "https://reacttraining.com",
    text: "react training", // remove any one property to see the error
  },
];

function Component() {
  // const [text, setText] = useState('shakeAndBake');
  // const [number, setNumber] = useState(1);
  // const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">Hello from typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setText(1);                  // error
          // setNumber('hello');          // error
          // setList([1, 3]);             // error
          // setList(['hello', 'world']); // ok
          // setLinks([...links, { id: 4, url: 'hello', someValue: 'hello' }]) // error
          setLinks([...links, { id: 4, url: "hello", text: "hello" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
