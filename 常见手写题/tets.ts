// #### 问题描述：
// 给定一棵树 (Tree)，用 TypeScript 实现以下两种遍历算法：
// 1. **广度优先搜索** (Breadth-First Search, BFS)
// 2. **深度优先搜索** (Depth-First Search, DFS)

// #### 树的表示：
// 树的每个节点可以用以下结构表示：

class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number, children: TreeNode[] = []) {
    this.value = value;
    this.children = children;
  }
}

// 例如，以下是一个树的示例：

// ```
//         1
//       / | \
//      2  3  4
//     / \     \
//    5   6     7
// ```

// 可以用以下代码构造这棵树：

// ```typescript
const tree = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(5), new TreeNode(6)]),
  new TreeNode(3),
  new TreeNode(4, [new TreeNode(7)]),
]);
// ```

// console.log(tree);
// #### 要求：
// 1. 实现一个函数 `bfs`，接受树的根节点作为输入，返回树的 BFS 遍历顺序。
// 2. 实现一个函数 `dfs`，接受树的根节点作为输入，返回树的 DFS 遍历顺序。

// #### 示例输入输出：
// 对于上述的 `tree`：

// - **BFS**：
//   ```typescript
//   bfs(tree); // 输出: [1, 2, 3, 4, 5, 6, 7]
//   ```

function BFS(root: TreeNode) {
  const queue: TreeNode[] = [root];
  const result: TreeNode[] = [];
  while (queue.length) {
    const len = queue.length;
    let current: any = [];
    for (let i = 0; i < len; i++) {
      const nod = queue.shift();
      current.push(nod?.value);
      nod?.children && queue.push(...nod.children);
    }
    result.push(...current);
  }
  console.log(JSON.stringify(result, null, 2));
  return result;
}
// DFS(tree);

// - **DFS**：
//   ```typescript
//   dfs(tree); // 输出: [1, 2, 5, 6, 3, 4, 7]  /先序
//   ```

function DFS(root: TreeNode) {
  console.log(root.value);
  for (let i = 0; i < root.children.length; i++) {
    DFS(root.children[i]);
  }
}
// DFS(tree);
// ---

// class student {
//   name: string;
//   stuArr: student[];
//   constructor(name: string, stuArr: student[] = []) {
//     this.name = name;
//     this.stuArr = stuArr;
//   }
// }

// const st1 = new student("aaa");
// const st2 = new student("bbb");
// st1.stuArr = [st2];
// console.log(st1);

// #### 问题描述：
// 给定一个图 (Graph)，用 TypeScript 实现以下两种遍历算法：
// 1. **广度优先搜索** (Breadth-First Search, BFS)
// 2. **深度优先搜索** (Depth-First Search, DFS)

// #### 图的表示：
// 图可以用邻接表的形式表示，邻接表是一个对象，其中键是节点，值是该节点的邻居数组。例如，以下是一个有向图的邻接表表示：

// ```typescript
// const graph = {
//   A: ['B', 'C'],
//   B: ['D', 'E'],
//   C: ['F'],
//   D: [],
//   E: ['F'],
//   F: []
// };
// ```

// 在这个图中：
// - 节点 `A` 指向节点 `B` 和 `C`。
// - 节点 `B` 指向节点 `D` 和 `E`。
// - 节点 `C` 指向节点 `F`。
// - 节点 `D` 和 `F` 没有任何邻居。
// - 节点 `E` 指向节点 `F`。

// #### 要求：
// 1. 实现一个函数 `bfs`，接受一个图和起始节点作为输入，返回从起始节点开始的 BFS 遍历顺序。
// 2. 实现一个函数 `dfs`，接受一个图和起始节点作为输入，返回从起始节点开始的 DFS 遍历顺序。

// #### 示例输入输出：
// 对于上述的 `graph` 和起始节点 `A`：

// - **BFS**：
//   ```typescript
//   bfs(graph, 'A'); // 输出: ['A', 'B', 'C', 'D', 'E', 'F']
//   ```

// - **DFS**：
//   ```typescript
//   dfs(graph, 'A'); // 输出: ['A', 'B', 'D', 'E', 'F', 'C']
//   ```

// const arr: Array<String> = [];
// const Arr: Array<student> = [];
// Arr.push(st1);
// interface stu {
//   name: string;
//   age: number;
// }

// function fun<T>(length: number, value: T): T[] {
//   const arr = Array<T>(length).fill(value);
//   return arr;
// }
// let arr: string | number | boolean[] = [];
// let arr2: Array<string | number | boolean> = [];
// let arr3: Array<{ name: string }> = [];
// arr3.push({ name: "1" });
// type Fn = (n1: number, n2: number) => number;

// const fun2: Fn = (a, b) => a + b;
// enum st {
//   a,
//   b,
//   c,
// }
// let strs = "hello, world"; //类型为string
// const strs2 = "hello"; //类型为hello
// interface stt {
//   name: string | number;
// }
// type stt2 =
//   | {
//       name: string | number;
//     }
//   | { age: number };
// //<T>表示参数的类型，arr: T[]表示arr是一个t类型的数组，T[]返回的是一个t类型的数组
// // let nums: 12;
// let nums = 123;
// let str = "string";

// str.indexOf("str", 0);

function output<T, U>(str: T, str2: U) {
  return [str, str2];
}
output<String, number>("abcdef", 123);
type callback = (item: number, index?: number, arr?: number[]) => boolean;

function forEach(arr: number[], callback: callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      break;
    }
  }
}

forEach([1, 2, 3, 4, 5], (item, i, arr) => {
  console.log(item, i, arr);
  return item === 3;
});

interface Book {
  name: string;
  price: number;
  add?(id: string, price: number): void;
  filter?: (id: string) => Book;
}
const book: Book = {
  name: "book",
  price: 100,
};
console.log(book);

let a = Symbol("a");
const b = Symbol("b");
const obj = {
  [a]: "123",
  [b]: () => {
    console.log("b");
  },
  c: "ccc",
};

for (const key in obj) {
  console.log(key);
}
console.log(Object.keys(obj));

type car = {
  name: string;
  age: number;
};
type BWM = car & {
  long: number;
};

const BMW: BWM = {
  name: "John",
  age: 100,
  long: 4900,
};

let set2: Set<car> = new Set();
let map: Map<string, number> = new Map();

interface sst {
  a: number;
}

// 尽量使用satisfies 而非断言
// const ssa = {} satisfies sst;
// console.log(ssa.a);
// type add = (a: number, b: number) => number;
// interface add2 {
//   (a: number, b: number): number;
// }
// const addd: add2 = (a: number, b: number) => a + b;
// let current = [[1, 2, 3]];

//函数重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    throw new Error("参数类型不匹配");
  }
}
// 上面的add或者这么写
type Add<T> = (a: T, b: T) => T;
const add2: Add<string> = (a, b) => {
  return a + b;
};

function doce<T, U>(a: T, b: U) {
  return [a, b];
}
const ss = doce<number, string>(1, "2");
type cal = <T>(item: T, index?: number) => boolean;
const filter = <T>(arr: T[], callback: cal) => {
  const result: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// 泛型也可以用到类型或者接口中，表示当前属性的类型由具体情况确定
type Result<T> = {
  name: string;
  age: number;
  index: number;
  data?: T;
};
interface Result2<T> {
  name: string;
  age: number;
  index: number;
  data?: T;
}

const res: Result2<string> = {
  name: "tom",
  age: 18,
  index: 0,
  data: "hello",
};

type Swap<T, U> = (a: T, b: U) => [U, T];

function swap2<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}
console.log(swap2<string, number>("1", 2));
const swap3: Swap<string, number> = (a, b) => {
  return [b, a];
};

type calbck<T, U> = (item: T, index?: number) => U;
// 泛型的默认类型
function map2<T = string, U = number>(arr: T[], callback: calbck<T, U>): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result.push(callback(item, i));
  }
  return result;
}

console.log(map2([1, 2, 3, 4, 5], (e) => e + 2));
