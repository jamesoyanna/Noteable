module.exports = function(app ,db){
app.post('/notes', (req, res)=>{
const note = {text: req.body.body, tile: req.body.title} 
db.collection('notes').insert(note, (err, results) =>{

})

    console.log(req.body)
    res.send('Hello my people')
})




}