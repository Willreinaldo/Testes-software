
const axios = require('axios');

describe("requisicoes de perguntas e respostas", () => {

    it('O metodo GET /perguntar deve funcionar', async () => {
        const response = await axios('http://localhost:8080/perguntar');

        expect(response.data).toBeTruthy();
        expect(response.data.length).toBeTruthy();
        expect(response.status).toBe(200);
    })
//É necessário ter uma pergunta feita no Banco de dados
    it('O metodo GET /pergunta{id} deve funcionar', async () => {
        const responseAsk = await axios('http://localhost:8080/pergunta/1');

        expect(responseAsk.data).toBeTruthy();
        expect(responseAsk.data.length).toBeTruthy();
        expect(responseAsk.status).toBe(200);
    })
});