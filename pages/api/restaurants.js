import dbConnect from "../../utils/mongodb";
import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: String,
    location: String
});

export default async function handler(req, res) {
    await dbConnect();

    const Restaurant = mongoose.model('Restaurant', restaurantSchema, 'restaurants')

try {
    const count = await Restaurant.countDocuments();
    if (count === 0) {
        const sampleRestaurant = new Restaurant({
            name: "Sample Restaurant",
            location: "123 Example Street"
        });
        await sampleRestaurant.save();
        res.status(201).json({ message: 'Sample restaurant created', restaurant: sampleRestaurant });
    } else {
        const results = await Restaurant.find({});
        res.status(200).json(results);
    } 
    }
    catch(error) {
        res.status(500).json({ message: 'Error accessing the database, error '});
    }
}
