// 我自己想的(第二次)
let solutionNum = 0
const solutions = []

NQueens(4)
console.log('solutionNum', solutionNum)
console.log('solutions', solutions)

function NQueens(n) {
    const table = []

    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(null)
        }
        table.push(row)
    }

    let i = 0
    let j = 0

    while (true) {
        table[i][j] = 'Q'
        let isViolated = false

        // console.log(table)

        // 向左檢查
        let k = j - 1
        while (k >= 0 && isViolated === false) {
            if (table[i][k] === 'Q') {
                isViolated = true
            }
            k--
        }

        // 向上檢查
        k = i - 1
        while (k >= 0 && isViolated === false) {
            if (table[k][j] === 'Q') {
                isViolated = true
            }
            k--
        }

        // 向左上檢查
        k = i - 1
        let l = j - 1
        while (k >= 0 && l >= 0 && isViolated === false) {
            if (table[k][l] === 'Q') {
                isViolated = true
            }
            k--
            l--
        }

        // 向左下檢查
        k = i + 1
        l = j - 1
        while (k < n && l >= 0 && isViolated === false) {
            if (table[k][l] === 'Q') {
                isViolated = true
            }
            k++
            l--
        }

        if (isViolated) {
            i++
            table[i][j] = null
        } else {
            i = 0
            j++

            if (j >= n) {
                solutionNum++

                const answer = []
                for (let i = 0; i < n; i++) {
                    const row = [...table[i]]
                    answer.push(row)
                }
                solutions.push(answer)

                j--
                check()
            }
        }

        while (i >= n) {
            j--
            if (j < 0) {
                console.log('dead end')
                return
            }
            check()
        }

        function check() {
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
