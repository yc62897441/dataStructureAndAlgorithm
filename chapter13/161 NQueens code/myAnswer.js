// 我自己想的
const result = []
NQueens(7)
// console.log('result', result)

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
    let violation = false
    let solutionNum = 0

    while (true) {
        // 檢查正左方與正上方
        let x = j
        let y = i
        while (x >= 0) {
            if (table[i][x] === 'Q' || violation) {
                violation = true
                break
            }
            x--
        }
        while (y >= 0) {
            if (table[y][j] === 'Q' || violation) {
                violation = true
                break
            }
            y--
        }

        // 檢查左上方
        x = j - 1
        y = i - 1
        while (y >= 0 && x >= 0) {
            if (table[y][x] === 'Q' || violation) {
                violation = true
                break
            }
            x--
            y--
        }

        // 檢查右下方
        x = j - 1
        y = i + 1
        while (y <= n - 1 && x >= 0) {
            if (table[y][x] === 'Q' || violation) {
                violation = true
                break
            }
            x--
            y++
        }

        if (violation) {
            i++
            violation = false

            while (j >= n || i >= n) {
                // 退回左邊一欄，並往下移一格
                back()

                if (j < 0) {
                    console.log('dead')
                    console.log('solutionNum', solutionNum)
                    return
                }
            }
        } else {
            table[i][j] = 'Q'
            i = 0
            j++

            if (j === n) {
                console.log('find one:')
                console.log('=====')
                console.log(table)
                console.log('=====')
                solutionNum++
                copy(result)
            }

            while (j >= n || i >= n) {
                // 退回左邊一欄，並往下移一格
                back()

                if (j < 0) {
                    console.log('dead')
                    console.log('solutionNum', solutionNum)
                    return
                }
            }
        }
    }

    function back() {
        j--
        let currentI = null
        for (let k = 0; k < n; k++) {
            if (table[k][j] === 'Q') {
                currentI = k
                table[k][j] = null
                break
            }
        }
        i = currentI + 1
    }

    function copy(result) {
        let answer = []
        for (let i = 0; i < n; i++) {
            const row = []
            for (let j = 0; j < n; j++) {
                if (table[i][j] === 'Q') {
                    row.push('Q')
                } else {
                    row.push(null)
                }
            }
            answer.push(row)
        }

        result.push(answer)
    }
}
