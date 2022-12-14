require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_KEY)

const Payment = async (req, res, next) => {
    const { name, price, success_url, cancel_url } = req.body
    console.log("esto da mal", name)
    const session = await stripe.checkout.sessions.create(
        {
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: name,
                        },
                        unit_amount: price * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: success_url,
            cancel_url: cancel_url,
        }
    )
    res.send({ url: session.url })


}

module.exports =
    { Payment }