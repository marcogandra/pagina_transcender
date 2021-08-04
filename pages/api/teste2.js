module.exports = (req, res) => {
    const { name = 'World' } = req.query;

    nome_eu = process.env.nome

    res.status(200).send(`Hello ${nome_eu}!`);
  };