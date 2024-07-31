const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51PGBd4SIVAMgmpIN6x1FzkJr1wD8blOvUlXhUY0Ba8soLFHnp4nWO9iHP3pukTtT8TgM9ca1WZk9nNC9siBqebZQ00eYSXnZrH');
const product=require('../model/model');
router.use(express.json());
router.post('/api/stripe', async (req, res) => {
    try {
        console.log(req.body);
        const items = req.body;
        const lineItems = items.map((item) => {
            return {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: item.proname,
                        images:[item.proimage],
                    },
                    unit_amount: item.proprice * 100,
                },
                quantity: item.qnty,
            };
        });

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'https://kritik-munda-12.netlify.app/success',
            cancel_url: 'https://kritik-munda-12.netlify.app/cancel',
        });
        res.send({ id: session.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
router.post('/api/mdmarts',async(req,res)=>{
    try{
        let data=new product(req.body);
        data=await data.save();
        res.status(201).send({msg:"YOU DATA ADDED IN MUNDA DATABASE.."});
    }catch(e){
        res.status(400).send(e);
    }
})
router.get('/api/mdmarts',async(req,res)=>{
    try{
        const data=await product.find({});
        res.status(201).send(data);
    }catch(e){
        res.status(400).send(e);
    }
})
router.put('/api/mdmarts/:id',async(req,res)=>{
    try{
        const data=await product.updateOne({_id:req.params.id},{$set:req.body});
        res.status(201).send(data);
    }catch(e){
        res.status(400).send(e);
    }
})
router.get('/api/mdmarts/:id',async(req,res)=>{
    try{
        const data=await product.findById(req.params.id);
        res.status(201).send(data);
    }catch(e){
        res.status(400).send(e);
    }
})
router.delete('/api/mdmarts/:id',async(req,res)=>{
    try{
        const data=await product.deleteOne({_id:req.params.id});
        res.status(201).send({msg:"data delete successfully"});
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;
