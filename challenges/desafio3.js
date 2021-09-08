db.produtos.find({}, { _id: 0 }).sort({ vendidos: -1 }).limit(1);
