class Node {
    constructor(value) {
        this.value = value
        this.visited = false
        this.edges = []
    }

    addNeighbor(edge) {
        this.edges.push(edge)
    }
}

class Edge {
    constructor(node1, node2, weight) {
        this.node1 = node1
        this.node2 = node2
        this.weight = weight
    }
}

let A = new Node('A')
let B = new Node('B')
let C = new Node('C')
let D = new Node('D')
let E = new Node('E')
let F = new Node('F')
let allNodes = [A, B, C, D, E, F]

let e1 = new Edge(A, B, 10)
A.addNeighbor(e1)
B.addNeighbor(e1)
let e2 = new Edge(A, C, 8)
A.addNeighbor(e2)
C.addNeighbor(e2)
let e3 = new Edge(B, D, 6)
B.addNeighbor(e3)
D.addNeighbor(e3)
let e4 = new Edge(C, D, 5)
C.addNeighbor(e4)
D.addNeighbor(e4)
let e5 = new Edge(B, E, 7)
B.addNeighbor(e5)
E.addNeighbor(e5)
let e6 = new Edge(D, E, 4)
D.addNeighbor(e6)
E.addNeighbor(e6)
let e7 = new Edge(D, F, 3)
D.addNeighbor(e7)
F.addNeighbor(e7)
let e8 = new Edge(E, F, 1)
E.addNeighbor(e8)
F.addNeighbor(e8)
let e9 = new Edge(C, F, 8)
C.addNeighbor(e9)
F.addNeighbor(e9)

let bucket = []
// console.log(mstPrim(A)) // 教案寫的
console.log('我自己寫的', mstPrim2(A)) // 我自己寫的

function mstPrim(startNode) {
    let mstEdges = []

    // 先找出第一條 bestEdge
    for (let i = 0; i < startNode.edges.length; i++) {
        bucket.push(startNode.edges[i])
    }
    let bestEdge = getBestEdge()

    // 找出剩餘的 bestEdge
    while (bestEdge !== null) {
        bestEdge.node1.visited = true
        bestEdge.node2.visited = true
        mstEdges.push(bestEdge)

        // 把目前 visited 的 node 的所有還沒被放進 mstEdges 的 edge 放進到 bucket。
        bucket = []
        allNodes.forEach((node) => {
            if (node.visited) {
                node.edges.forEach((edge) => {
                    if (!mstEdges.includes(edge)) {
                        bucket.push(edge)
                    }
                })
            }
        })
        // 再從 bucket 中找出 weight 最小且並沒有連結 2 個已經被 visited 的 node 的 bestEdge。
        bestEdge = getBestEdge()
    }

    return mstEdges
}

function getBestEdge() {
    let bestEdge = null

    // 如果還沒找到 bestEdge，且 bucket 中還有東西時，則從中繼續尋找 bestEdge。
    while (bestEdge === null && bucket.length > 0) {
        bestEdge = bucket[0]
        let index = 0

        // 找到 bucket 中，weight 最小的 edge。
        bucket.forEach((edge, i) => {
            if (edge.weight < bestEdge.weight) {
                bestEdge = edge
                index = i
            }
        })

        // 如果這個 edge 連結 2 個已經被 visited 的 node，則這條 edge 要作廢。將其中 bucket 排除，再從新找一次。
        if (bestEdge.node1.visited && bestEdge.node2.visited) {
            bucket.splice(index, 1)
            bestEdge = null
        }
    }

    return bestEdge
}

// 我自己寫的
function mstPrim2(startNode) {
    let bucket2 = [] // 暫存候選 smallest edges 的 array
    const result = [] // 存 MST 的 edges 的 array
    const visitedNodes = []

    // 開始第一個
    startNode.visited = true
    visitedNodes.push(startNode)
    startNode.edges.forEach((edge) => {
        bucket2.push(edge)
    })

    while (bucket2.length > 0) {
        let theSmallEdge = null

        for (let i = 0; i < bucket2.length; i++) {
            // 如果這個 edge 不在 result 中，且它連接的 2 個 nodes 至少有 1 個還沒被拜訪過
            // 則如果它的 weight 是目前發現的最小的，則把它存到 theSmallEdge
            if (!result.includes(bucket2[i]) && (!bucket2[i].node1.visited || !bucket2[i].node2.visited)) {
                if (theSmallEdge === null || bucket2[i].weight < theSmallEdge?.weight) {
                    theSmallEdge = bucket2[i]
                }
            }
        }

        // 有找到 smallest edge 時，把它存到 result 中，並且把它的 2 個 nodes 設為 visited true
        if (theSmallEdge !== null) {
            result.push(theSmallEdge)
            if (!visitedNodes.includes(theSmallEdge.node1)) {
                visitedNodes.push(theSmallEdge.node1)
                theSmallEdge.node1.visited = true
            }
            if (!visitedNodes.includes(theSmallEdge.node2)) {
                visitedNodes.push(theSmallEdge.node2)
                theSmallEdge.node2.visited = true
            }
        } else {
            // 沒有找到，則跳出 while 迴圈
            break
        }

        // 進行下一輪的尋找
        bucket2 = []
        // 目前已訪問的 nodes，他們的 edges 如果不在 result、bucket2 中，則加到 bucket2(暫存候選 smallest edges 的 array)
        visitedNodes.forEach((node) => {
            node.edges.forEach((edge) => {
                if (!result.includes(edge) && !bucket2.includes(edge)) {
                    bucket2.push(edge)
                }
            })
        })
    }

    return result
}
