db.produtos.deleteMany({ curtidas: { $lt: 50 } }, { _id: 0 });
