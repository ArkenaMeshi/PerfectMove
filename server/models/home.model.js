const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema(
  {
    propertyType: { type: String, required: [true, "PropertyType is required"] },
    houseNumber: { type: String, required: [true, "House Number is required"] },
    addressLine: { type: String, required: [true, "  Address Line is required"] },
    town: { type: String, set: v => v.toLowerCase(), required: [true, "Town is required"] },
    numberOfBedrooms: { type: Number, required: [true, "Number Of Bedrooms is required"] },
    numberOfBathrooms: { type: Number, required: [true, "Number Of Bathrooms is required"] },
    furnishing: { type: String, required: [true, "Furnishing is required"] },
    monthlyRent: { type: Number, required: [true, "Monthly Rent is required"] },
    maxTenants: { type: Number, required: [true, "Max Tenants is required"] },
    tenancylength: { type: Number, required: [true, "Tenancy Length is required"] },
    image : { type: String, required: [true, "Image  is required"] },
    gardenAccess: { type: Boolean },
    parking: { type: Boolean },
    fireplace: { type: Boolean },
    billsincluded: { type: Boolean },
    studentsAllowed: { type: Boolean },
    petsAllowed: { type: Boolean },
    smokersAllowed: { type: Boolean },
    rented: {type: Boolean}
  },
  { timestamps: true, getters: false }
);

module.exports = mongoose.model("Home", HomeSchema);
