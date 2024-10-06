const { Ollama } = require('ollama');

exports.handleChat = async (req, res) => {
    try {
        console.log('Received request body:', req.body);
        
        if (!req.body || !req.body.message) {
            console.log('Bad request: Message is required');
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }

        const { message } = req.body;
        
        const systemPrompt = `You are a friendly financial advisor for children. 
            Keep answers simple, fun, and educational. Use examples that children can relate to.
            Focus on basic financial literacy concepts.
            Keep responses short - no more than 2.3 sentences.`;

        console.log('Sending request to Ollama');
        const ollama = new Ollama({ host: "http://192.168.1.122:11434"});
        const response = await ollama.chat({
            model: 'llama3.2',
            messages: [
                {
                    role: 'system',
                    content: systemPrompt
                },
                {
                    role: 'user',
                    content: message
                }
            ]
        });

        console.log('Received response from Ollama:', response);

        res.json({
            success: true,
            message: response.message.content
        });
        console.log('Sent response to client');
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process chat message'
        });
    }
};