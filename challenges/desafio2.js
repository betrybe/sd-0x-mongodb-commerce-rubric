db.produtos.updateMany(
  { valorUnitario: { $exists: false } },
  { $set: { valorUnitario: 0.00 } },
);

db.produtos.find({}, { _id: false, nome: true, valorUnitario: true });
