// 我自己想的(第二次)

class Node {
    constructor() {
        this.profit = 0
        this.weight = 0
        this.lowerBound = 0
        this.c = 0
        this.accept = [] // 一定要放入的項目的 name
        this.reject = [] // 一定不放入的項目的 name
        this.alreadyHave = [] // 實際有放入的項目的 name (0/1情況下，不包含以 fractional 形式放入的項目)
    }
}

// 要放入背包的項目，依照項目的 rate 由大到小排序好
const items = [
    {
        name: '2',
        profit: 10,
        weight: 2,
        rate: 5,
    },
    {
        name: '1',
        profit: 10,
        weight: 4,
        rate: 2.5,
    },
    {
        name: '3',
        profit: 12,
        weight: 6,
        rate: 2,
    },
    {
        name: '4',
        profit: 15,
        weight: 9,
        rate: 1.667,
    },
]
const maxWeight = 15 // 背包空間上限
let result = [] // 存可能的最佳解，最後一項是真正的最佳解
let currentLowerBound = 0 // 目前已發現的最好的 lower bound
let startNode = new Node()
doBranch(startNode, 0)

console.log('result', result)

function doBranch(node, i) {
    if (i >= items.length) return

    // 建立兩個分支，從父節點取得有哪些一定要放入的項目(accept)、哪些一定不要放入的項目(reject)
    let leftBranch = new Node()
    let rightBranch = new Node()
    leftBranch.accept = [...node.accept]
    leftBranch.reject = [...node.reject]
    rightBranch.accept = [...node.accept]
    rightBranch.reject = [...node.reject]

    // 先放入一定要放入的項目(accept)，再看剩餘多少空間
    items.forEach((item) => {
        if (leftBranch.accept.includes(item.name)) {
            leftBranch.profit += item.profit
            leftBranch.weight += item.weight
            leftBranch.lowerBound += item.profit
            leftBranch.c += item.profit
            leftBranch.alreadyHave.push(item.name)
        }

        if (rightBranch.accept.includes(item.name)) {
            rightBranch.profit += item.profit
            rightBranch.weight += item.weight
            rightBranch.lowerBound += item.profit
            rightBranch.c += item.profit
            rightBranch.alreadyHave.push(item.name)
        }
    })

    // 開始分支選擇，leftBranch 要加入 items 的第 i 項；rightBranch 不加入 items 的第 i 項
    if (leftBranch.weight + items[i].weight <= maxWeight) {
        leftBranch.profit += items[i].profit
        leftBranch.weight += items[i].weight
        leftBranch.lowerBound += items[i].profit
        leftBranch.c += items[i].profit
        leftBranch.accept.push(items[i].name)
        leftBranch.alreadyHave.push(items[i].name)
    }
    rightBranch.reject.push(items[i].name)

    // 填滿剩餘空間，計算 lower bound 與 c
    items.forEach((item) => {
        if (!leftBranch.alreadyHave.includes(item.name) && !leftBranch.reject.includes(item.name)) {
            if (leftBranch.weight < maxWeight) {
                if (leftBranch.weight + item.weight <= maxWeight) {
                    leftBranch.profit += item.profit
                    leftBranch.weight += item.weight
                    leftBranch.lowerBound += item.profit
                    leftBranch.c += item.profit
                    leftBranch.alreadyHave.push(item.name)
                } else {
                    const leftWeight = maxWeight - leftBranch.weight
                    leftBranch.weight += leftWeight
                    leftBranch.c += leftWeight * item.rate
                }
            }
        }

        if (
            !rightBranch.alreadyHave.includes(item.name) &&
            !rightBranch.reject.includes(item.name)
        ) {
            if (rightBranch.weight < maxWeight) {
                if (rightBranch.weight + item.weight <= maxWeight) {
                    rightBranch.profit += item.profit
                    rightBranch.weight += item.weight
                    rightBranch.lowerBound += item.profit
                    rightBranch.c += item.profit
                    rightBranch.alreadyHave.push(item.name)
                } else {
                    const leftWeight = maxWeight - rightBranch.weight
                    rightBranch.weight += leftWeight
                    rightBranch.c += leftWeight * item.rate
                }
            }
        }
    })

    // 如果 c <= currentLowerBound，則不用在處理這個 branch；如果 lower bound > currentLowerBound，則更新 currentLowerBound，並加入 result
    if (leftBranch.c > currentLowerBound) {
        if (leftBranch.lowerBound > currentLowerBound) {
            currentLowerBound = leftBranch.lowerBound
            result.push(leftBranch)
        }
        doBranch(leftBranch, i + 1)
    }
    if (rightBranch.c > currentLowerBound) {
        if (rightBranch.lowerBound > currentLowerBound) {
            currentLowerBound = rightBranch.lowerBound
            result.push(rightBranch)
        }
        doBranch(rightBranch, i + 1)
    }
}
