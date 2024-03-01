// 我自己想的(第二次)
let solutionNum = 0
const solutions = []

NQueens(4)
console.log('solutionNum', solutionNum)
console.log('solutions', solutions)

function NQueens(n) {
    // 建立棋盤
    const table = []
    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(null)
        }
        table.push(row)
    }

    let i = 0 // 列
    let j = 0 // 欄

    while (true) {
        table[i][j] = 'Q'
        let isViolated = false

        // console.log(table)

        // 向左檢查
        let k = j - 1
        while (k >= 0 && isViolated === false) {
            if (table[i][k] === 'Q') isViolated = true
            k--
        }

        // 向上檢查
        k = i - 1
        while (k >= 0 && isViolated === false) {
            if (table[k][j] === 'Q') isViolated = true
            k--
        }

        // 向左上檢查
        k = i - 1
        let l = j - 1
        while (k >= 0 && l >= 0 && isViolated === false) {
            if (table[k][l] === 'Q') isViolated = true
            k--
            l--
        }

        // 向左下檢查
        k = i + 1
        l = j - 1
        while (k < n && l >= 0 && isViolated === false) {
            if (table[k][l] === 'Q') isViolated = true
            k++
            l--
        }

        if (isViolated) {
            // 如果有衝突，目前放 Q 的位置改成 null，並把接下來預定放 Q 的位置往下移一格
            table[i][j] = null
            i++
        } else {
            // 如果沒有衝突，開始嘗試在下一欄放 Q
            i = 0
            j++

            if (j >= n) {
                // 如果目前沒衝突且已經放完最後一欄，則把解答記錄下來
                solutionNum++
                const answer = []
                for (let i = 0; i < n; i++) {
                    const row = [...table[i]]
                    answer.push(row)
                }
                solutions.push(answer)

                // 退回到上一欄，調整上欄 Q 的位置
                j--
                findQNextRowIndex()
            }
        }

        // 如果某一欄已經檢查到到最後一列仍然不能放下 Q，則退回到上一欄，調整上欄 Q 的位置
        while (i >= n) {
            j-- // 退回到上一欄

            // 結束點。如果已經沒辦法再往前退一欄，代表全部檢查完了
            if (j < 0) {
                console.log('dead end')
                return
            }

            // 調整上欄 Q 的位置
            findQNextRowIndex()
        }

        // 找出目前放 Q 的位置，並且把接下來預定放 Q 的位置往下移一格
        function findQNextRowIndex() {
            let Q_At_RowIndex = 0
            for (let m = 0; m < n; m++) {
                if (table[m][j] === 'Q') {
                    Q_At_RowIndex = m
                    table[m][j] = null
                }
            }
            i = Q_At_RowIndex + 1
        }
    }
}
