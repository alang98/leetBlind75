function Node(val, neighbors){
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if(this.isEmpty()){
      return 'Underflow';
    }
    return this.items.shift();
  }

  has(item) {
    return this.items.indexOf(item) !== undefined;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = new Map();
  }

  addVertex(node) {
    this.adjacentList.set(node, []);
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList.get(node1).push(node2)
    this.adjacentList.get(node2).push(node1);
  }

  printGraph() {
    const get_keys = this.adjacentList.keys();

    for (let i of get_keys) {

      let get_values = this.adjacentList.get(i);
      let graphString = '';

      for (let j of get_values) {
        graphString += j + ' ';

        console.log(i + ' --> ' + graphString);
        console.log('adjencyList: ', this.adjacentList)
      }
    }
  }

  bfs(startingNode) {

    const visited = {};
    const q = new Queue();

    // visited[startingNode] = true;
    q.enqueue(startingNode);

    console.log('q', q);
    console.log('q.items', q.items);

    while (!q.isEmpty()) {
    const getQueueElement = q.dequeue();
    console.log('q2', q);

    // console.log('q.has(getQueueElement)', q.has(startingNode));
    //     console.log('getQueueElement', getQueueElement)
      // console.log(getQueueElement);

      const get_list = this.adjacentList.get(getQueueElement);
      // console.log('get_list', get_list);

      // for (var i in get_list){
        const neighbor = get_list[1];
        // const neighbor = get_list[1];
        console.log('neighbor', neighbor);

        if (!visited[getQueueElement]) {
          visited[getQueueElement] = true;
          if (!visited[neighbor]) {

            q.enqueue(neighbor);

          }
        }
      // }
      console.log('visited', visited);
      console.log('q2', q);
    }
  }
}

const myGraph = new Graph(4);
const vertices = [1, 2, 3, 4];

for (let i = 0; i < vertices.length; i++) {
  myGraph.addVertex(vertices[i]);
}

myGraph.addEdge(1, 4);
myGraph.addEdge(1, 2);
// myGraph.addEdge(2, 1);
myGraph.addEdge(2, 3);
// myGraph.addEdge(3, 2);
myGraph.addEdge(3, 4);
// myGraph.addEdge(4, 1);
// myGraph.addEdge(4, );

myGraph.printGraph();
myGraph.bfs(1);

// let newNodeTest = new Node(33);
// console.log(newNodeTest);

// const cloneGraph = (node) => {
//   let nodeMap = new Map()

//   if (!nodeMap.has(node.val)) {
//     nodeMap.set(node.val, new Node(node.val))
//   }

//   console.log('nodeMap', nodeMap);
//   console.log(nodeMap.get(node.val).push(node.val));
// }

// cloneGraph(newNodeTest);
