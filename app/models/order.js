const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  products: [{
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, min: 1}
  }],
  purchased: {
    type: Boolean,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
