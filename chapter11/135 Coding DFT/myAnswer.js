class Node {
    constructor(value) {
        this.value = value
        this.neighbors = []
        this.visited = false
    }

    addNeighbor(neighborNode) {
        this.neighbors.push(neighborNode)
    }
}

let A = new Node('A')
let B = new Node('B')
let C = new Node('C')
let D = new Node('D')
let E = new Node('E')
let F = new Node('F')
let G = new Node('G')
let H = new Node('H')
let I = new Node('I')
let J = new Node('J')
let K = new Node('K')
let L = new Node('L')
let M = new Node('M')

A.addNeighbor(E)
A.addNeighbor(F)
B.addNeighbor(D)
C.addNeighbor(D)
D.addNeighbor(B)
D.addNeighbor(C)
D.addNeighbor(E)
D.addNeighbor(I)
E.addNeighbor(A)
E.addNeighbor(D)
E.addNeighbor(F)
E.addNeighbor(I)
F.addNeighbor(A)
F.addNeighbor(E)
F.addNeighbor(I)
G.addNeighbor(H)
G.addNeighbor(I)
H.addNeighbor(G)
H.addNeighbor(I)
H.addNeighbor(L)
I.addNeighbor(D)
I.addNeighbor(E)
I.addNeighbor(F)
I.addNeighbor(G)
I.addNeighbor(H)
I.addNeighbor(J)
I.addNeighbor(K)
I.addNeighbor(M)
J.addNeighbor(I)
J.addNeighbor(M)
K.addNeighbor(I)
K.addNeighbor(L)
K.addNeighbor(M)
L.addNeighbor(H)
L.addNeighbor(K)
M.addNeighbor(I)
M.addNeighbor(J)
M.addNeighbor(K)

const result = []

function DFT(startNode) {
    startNode.visited = true
    result.push(startNode.value)
    for (let i = 0; i < startNode.neighbors.length; i++) {
        if (startNode.neighbors[i].visited === false) {
            DFT(startNode.neighbors[i])
        }
    }

    return result
}

console.log(DFT(A))
