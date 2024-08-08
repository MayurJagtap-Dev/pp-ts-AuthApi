import { type PropsWithChildren } from "react";

/* Sample 1:

type ComponentProps = {
  name: string;
  id: number;
};

function Component({ name, id }: ComponentProps) {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>ID : {id}</h1>
    </div>
  );
}
export default Component;

Also we can destructure as below with same definition above
{ name, id }: { name: string; id: number }
*/

// Sample 2:
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

// Alternative way to declare above type
// type ComponentProps = {
//   name: string;
//   id: number;
//   children: React.ReactNode;
// };

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;
