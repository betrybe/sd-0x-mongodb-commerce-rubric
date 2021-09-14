db.resumoProdutos.insertOne({
  franquia: "McDonald's",
  totalProdutos: db.produtos.find().count(),
});

db.resumoProdutos.findOne({ franquia: "McDonald's" }, { _id: 0 });
