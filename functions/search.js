const qs = require('querystring');
const fetch = require('node-fetch');

exports.handler = async (event) => {
    // const { query } = qs.parse(event.body);

    const response = await fetch(
        `https://api.unsplash.com/photos/random/?client_id=${process.env.UNSPLASH_API_TOKEN}&count=30`,
        // {
        //     method: 'GET',
        //     headers: {
        //         Authorization: `Client-ID ${process.env.UNSPLASH_API_TOKEN}`,
        //     },
        // }
    )

    .then((response) => response.json())
    .catch((error) => console.error(error));

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(response),
    };
};
