// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources')
}

async function postResource(entry) {
    await db('resources').insert(entry);
    const answer = await getResources()
    return answer[answer.length - 1]
}

module.exports = {getResources, postResource}