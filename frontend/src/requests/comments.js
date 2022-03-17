

const axios = require('axios').default;


export const getComments = async (origin) => {
    const response = await fetch('/api/comment?origin=' + origin)
    return response.json()
}

export const newComment = async (text,origin,userId,username) => {
    console.log(text,origin,userId)
    const  respone = await fetch('/api/comment',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: text,
            origin: origin,
            userId: userId,
            username: username
        })
    })
    console.log(respone)
}