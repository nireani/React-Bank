const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')


router.get(`/transactions`, function(req, res){
    Transaction.find({}).exec((err, transactions) => {
        res.send(transactions) 
    })
})

router.post(`/transaction`, async function (req, res) {
    let body = req.body
    let t1 = new Transaction(body)
    await t1.save()
    res.send(t1)
})


router.delete('/transaction/:id', async function(req,res){
    const id = req.params.id;
    console.log(id);
    
        await Transaction.findByIdAndDelete(id)
    res.end();
})

module.exports = router