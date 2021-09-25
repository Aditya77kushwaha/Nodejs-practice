const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res)=>{
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (error) {
        res.send('Error '+ error)
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    } catch (error) {
        res.send('Error '+ error)
    }
})

router.post('/', async(req, res)=>{
    const alien = new Alien({
        name : req.body.name,
        sub : req.body.sub,
        tech : req.body.tech
    })
    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send("Error " + error)
    }
})

router.patch('/:id', async(req,res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        alien.name = req.body.name
        alien.tech = req.body.tech
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send(error)
    }
})

router.delete('/:id', async(req, res)=>{
    try {
        const alien = await Alien.findById(req.params.id)
        alien.delete()
    } catch (error) {
        res.send(error)
    }
})

module.exports = router