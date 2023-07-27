// 我自己想的

// 等待裝入背包的項目
const items = [
    {
        name: 'item1',
        profit: 18,
        weight: 2,
        rate: 9,
    },

    {
        name: 'item2',
        profit: 32,
        weight: 4,
        rate: 8,
    },
    {
        name: 'item3',
        profit: 60,
        weight: 13,
        rate: 5,
    },
    {
        name: 'item4',
        profit: 19.2,
        weight: 4,
        rate: 4.8,
    },
    {
        name: 'item5',
        profit: 13.5,
        weight: 3,
        rate: 4.5,
    },
    {
        name: 'item6',
        profit: 21,
        weight: 5,
        rate: 4.2,
    },
    {
        name: 'item7',
        profit: 24,
        weight: 6,
        rate: 4,
    },
    {
        name: 'item8',
        profit: 7.8,
        weight: 2,
        rate: 3.9,
    },
]

const maxWeight = 20 // 背包最大容量
let currentLowBound = 0 // 目前己知實際的最大利益
const result = [] // 裝候選結果

class Node {
    constructor() {
        this.weight = 0 // 實際重量
        this.profit = 0 // 實際利益
        this.c = 0 // 潛在可能的最大利益
        this.accept = [] // 二分法中一定要放的
        this.reject = [] // 二分法中一定不要放的
        this.includes = [] // 實際有放進來的
    }
}

const startNode = new Node()

doKnapsack(startNode, 0)

function doKnapsack(startNode, itemIndex) {
    // 建立 2 個 node 來做當前「items[itemIndex]項目」的二分法
    const yesNode = new Node()
    const noNode = new Node()

    // 複製之前走過的二分法路徑，以及已經確定的利益與重量(accept 的利益與重量)
    yesNode.accept = [...startNode.accept]
    yesNode.reject = [...startNode.reject]
    noNode.accept = [...startNode.accept]
    noNode.reject = [...startNode.reject]
    fillAccept(yesNode)
    fillAccept(noNode)

    // 要加入當前「items[itemIndex]項目」的路徑
    if (yesNode.weight + items[itemIndex].weight <= maxWeight) {
        yesNode.profit += items[itemIndex].profit
        yesNode.weight += items[itemIndex].weight
        yesNode.c += items[itemIndex].profit
        yesNode.includes.push(items[itemIndex].name)
        yesNode.accept.push(items[itemIndex].name)

        fillElse(yesNode)

        // 如果已經是到 items 的最後一項就結束，如果還未到 items 的最後一項則繼續到下一層二分法
        if (itemIndex >= items.length - 1) {
            if (yesNode.c >= currentLowBound) {
                result.push(yesNode)
            }
        } else {
            // 如果已知目前路徑的「潛在可能的最大利益」 < 「目前己知實際的最大利益」，則這條路就不用繼續走下去了
            if (yesNode.c >= currentLowBound) {
                doKnapsack(yesNode, itemIndex + 1)
            }
        }
    } else {
        if (yesNode.c >= currentLowBound) {
            result.push(yesNode)
        }
    }

    // 不要加入當前「items[itemIndex]項目」的路徑
    noNode.reject.push(items[itemIndex].name)
    fillElse(noNode)
    // 如果已經是到 items 的最後一項就結束，如果還未到 items 的最後一項則繼續到下一層二分法
    if (itemIndex >= items.length - 1) {
        if (noNode.c >= currentLowBound) {
            result.push(noNode)
        }
    } else {
        // 如果已知目前路徑的「潛在可能的最大利益」 < 「目前己知實際的最大利益」，則這條路就不用繼續走下去了
        if (noNode.c >= currentLowBound) {
            doKnapsack(noNode, itemIndex + 1)
        }
    }
}

console.log('result', result)

// 將「二分法中一定要放的」項目，放入背包
function fillAccept(node) {
    items.forEach((item) => {
        if (node.accept.includes(item.name)) {
            node.profit += item.profit
            node.weight += item.weight
            node.c += item.profit
            node.includes.push(item.name)
        }
    })
}

// 填滿剩餘背包空間
function fillElse(node) {
    // 僅接受整數，來計算「實際利益」
    items.forEach((item) => {
        if (node.weight >= maxWeight) return
        if (!node.accept.includes(item.name) && !node.reject.includes(item.name)) {
            if (node.weight + item.weight <= maxWeight) {
                node.profit += item.profit
                node.weight += item.weight
                node.c += item.profit
                node.includes.push(item.name)
            }
        }
    })

    // 接受分數形式(Fractional)，來計算「潛在可能的最大利益」
    items.forEach((item) => {
        if (node.weight >= maxWeight) return
        if (!node.accept.includes(item.name) && !node.reject.includes(item.name) && !node.includes.includes(item.name)) {
            const leftWeight = maxWeight - node.weight
            node.weight += leftWeight
            node.c += item.rate * leftWeight
        }
    })

    if (node.profit > currentLowBound) {
        currentLowBound = node.profit
    }
}
