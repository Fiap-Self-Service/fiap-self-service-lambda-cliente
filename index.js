const axios = require('axios');

module.exports.handler = async (event, context) => {
    try {
        
        const response = await axios.get('http://aadfa33dba232459c953a70b3381a909-617e9a439eaa8419.elb.us-east-1.amazonaws.com:3000/clientes/' + event.pathParameters.cpf);

        // Se a requisição for bem-sucedida, retornamos a resposta com status 200
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: 200,
                data: response.data,  // Retornando os dados recebidos da API pública
                message: "Sucesso",
            }),
        };
    } catch (error) {
        // Em caso de erro, retornamos um status 500 e a mensagem de erro
        return {
            statusCode: 500,
            body: JSON.stringify({
                status: 500,
                message: "Erro ao processar a requisição",
                error: error.message,  // Detalhe do erro para debug
            }),
        };
    }
};
