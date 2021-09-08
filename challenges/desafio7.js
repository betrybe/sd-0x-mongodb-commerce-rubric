db.produtos.find({ vendidos: { $gt: 90 } }, { _id: 0 });
