db.produtos.find({ vendidos: { $gt: 50, $lt: 100 } }, { _id: 0 });
