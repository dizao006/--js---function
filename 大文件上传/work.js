import {
    createChunk
} from "./createChunk.js"

onmessage = async (e) => {
    let {
        file,
        chunkSize,
        startChunkIndex,
        endChunkIndex
    } = e.data
    let proms = []
    for (let i = startChunkIndex; i < endChunkIndex; i++) {
        proms.push(createChunk(file, i, chunkSize))
    }
    let chunks = await Promise.all(proms)
    postMessage(chunks)
}