This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Challenges

Sanitization of the woonaddresses.

Via regex we assume to first get postcode entered 
" 3027gs" | " 3278 gs" | " 2378gs  "

We are forgiving when it comes to spaces + if house additional number is given.
But not the order.
