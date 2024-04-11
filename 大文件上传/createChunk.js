export async function createChunk(file, index, chunkSize) {
    return new Promise((resolve) => {
        const start = index * chunkSize
        const end = start + chunkSize;
        const spark = Math.random()
        const fileReader = new FileReader()
        const blob = file.slice(start, end)
        fileReader.onload = (e) => {
            resolve({
                start,
                end,
                index,
                hash: spark,
                blob,
            })
        }
        fileReader.readAsArrayBuffer(blob)
    })
}