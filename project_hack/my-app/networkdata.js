const a = {
    "IP": "127.0.0.2",
    "Services": [
        {
            "Port": 135,
            "Service Name": "msrpc",
            "State": "open"
        },
        {
            "Port": 445,
            "Service Name": "microsoft-ds",
            "State": "open"
        },
        {
            "Port": 3000,
            "Service Name": "ppp",
            "State": "open"
        }
    ],
    "protocol": "tcp"
}
module.exports = a