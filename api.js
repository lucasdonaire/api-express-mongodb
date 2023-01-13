import app from './src/app.js'

const port = process.env.PORT || 3031
// const port = 3031


app.listen(port, () => {
    console.log(`funcionando em http://localhost:${port}`)
})