const express = require('express')
const User = require('../models/userModel')
const router = express.Router()
const myToken = require('../utils')



router.get('/all', async (req, res) => {
    try {
        const users = await User.find({})

        res.send(users)
        
        
    } catch (e) {
        res.status(500).send(
            e
        )
    }
})






router.post('/signin', async (req, res) => {
    try {
        const {email, password} = req.body
        const signinUser = await User.findOne({
            email: email,
            password: password
        }).select('-password')
        
        if(signinUser){

            res.send({
                signinUser,
                 token: await myToken(signinUser)
            })

        }
        res.send({
            message:`No user exists with ${email}.`
        })

           
    } catch (e) {
        
    }
})

router.get("/createadmin", async (req, res) => {
    try {
        const user = new User({
            name: 'Shujja',
            email: "djshujja@gmail.com",
            password: "shujja1999",
            isAdmin: true
        }) 
    
        const newUser = await user.save()
        res.send(newUser)
    } catch (e) {
        res.send({
            message: e.message
        })
    }
})

module.exports = router