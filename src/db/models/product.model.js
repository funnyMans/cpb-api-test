const mongoose = require('mongoose');
const { paginate, toJSON } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
      trim: true,
    },
    body_html: {
      type: String,
      trim: true,
    },
    vendor: {
      type: String,
      trim: true,
    },
    product_type: {
      type: String,
      trim: true,
    },
    created_at: {
      type: Date,
    },

    handle: {
      type: String,
      trim: true,
    },

    updated_at: {
      type: Date,
    },
    published_at: {
      type: Date,
    },

    template_suffix: {
      type: Object,
    },
    published_scope: {
      type: String,
    },
    tags: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
    admin_graphql_api_id: {
      type: String,
      trim: true,
    },
    variants: [{ type: Object }],
    optiions: [{ type: Object }],
    images: [{ type: Object }],
    image: {
      id: { type: Number },
      alt: { type: String },
      position: { type: Number },
      product_id: { type: Number },
      created_at: { type: Date },
      updated_at: { type: Date },
      admin_graphql_api_id: { type: String },
      width: { type: Number },
      height: { type: Number },
      src: { type: String },
      variant_ids: [{ type: Number }],
    },
  },
  {
    timestamps: true,
  }
);

// // add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
