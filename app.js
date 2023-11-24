//do not deploy this API to github Online
const API_KEY = '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'
const submitButton = document.querySelector('#submit')
async function getMessage() {
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            'Authorization' : `Bearer ${API_KEY}`
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: "You are a helpful assistant."
                }],
            max_tokens: 100
        })
    }
    try {
        const response = await fetch('\n' +
            'https://api.openai.com/v1/chat/completions', options)
        const date = await response.json()
        console.log(date)
    } catch  (error){
        console.error(error)
    }
}

submitButton.addEventListener('click', getMessage)