import express from 'express';

const routes = express.Router();

//nomes
const nomes = ['Chico', 'Yas', 'Keket', 'Lulu'];

routes.get('/nome/:nome', (req, res) => {
    try {
        const { nome } = req.params;
        if (nomes.includes(nome)) {
            return res.status(200).json(`O nome "${nome}" está na lista.`);
        } else {
            return res.status(200).json(`O nome "${nome}" não está na lista.`);
        }
    } catch (error) {
        return res.status(500).json('Deu erro ai meu chapa.');
    }
});

export default routes;