let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        console.log("create", req.body)
        const {text, time} = req.body;

        messages.push({ id:id, text:text, time:time})
        id++;
        console.log({messages})
        res.status(200).send(messages);
    },
    read: (req, res) => {
        console.log("read", req.body)
        res.status(200).send(messages);
    },
    update: (req, res) => {
        console.log("update", req.body, req.params.id)
        const {text} = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        console.log({messages})
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        console.log("delete", req.body)
        const deleteID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        console.log({messages})
        res.status(200).send(messages)
    },
    
}