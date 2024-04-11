const chunkSize = 1024 * 1024 * 5
let threadCound = (navigator.hardwareConcurrency || 6)
async function cutFile(file) {
    return new Promise((resolve) => {
        let count = Math.ceil(file.size / chunkSize)
        let result = []
        let finshiCount = 0
        const threadChunkCount = Math.ceil(count / threadCound) //得到线程分片数量
        for (let i = 0; i < threadChunkCount; i++) {
            const work = new Worker('./work.js', {
                type: 'module',
            })
            let end = (i + 1) * threadChunkCount
            let strat = i * threadChunkCount
            if (end > count) {
                end = count
            }
            work.postMessage({
                file,
                chunkSize,
                startChunkIndex: strat,
                endChunkIndex: end
            })
            work.onmessage = (e) => {
                for (let i = strat; i < end; i++) {
                    result[i] = e.data[i - strat]
                }
                work.terminate()
                finshiCount++;
                if (finshiCount === threadChunkCount) {
                    resolve(result)
                }
            }

        }

    })

}