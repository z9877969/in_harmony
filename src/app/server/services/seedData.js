import CollectionSchema from '../models/CollectionSchema.js';
import env from '../utils/evn.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Sample seed data
const collections = [
  {
    title: 'Test Collection 1',
    importance: 'High',
    image: ['https://example.com/image1.png'],
    collected: 500,
    target: 10000,
    alt: 'Description of image 1',
    peopleDonate: 120,
    desc: 'This is a test collection for demo purposes.',
    long_desc: 'Long description for test collection 1.',
    isOpen: true,
    createdAt: new Date(),
    closedAt: null,
  },
  {
    title: 'Test Collection 2',
    importance: 'Medium',
    image: ['https://example.com/image2.png'],
    collected: 1000,
    target: 5000,
    alt: 'Description of image 2',
    peopleDonate: 150,
    desc: 'Another test collection to test the system.',
    long_desc: 'Long description for test collection 2.',
    isOpen: true,
    createdAt: new Date(),
    closedAt: null,
  },
  {
    title: 'Test Collection 3',
    importance: 'Low',
    image: ['https://example.com/image3.png'],
    collected: 300,
    target: 7000,
    alt: 'Description of image 3',
    peopleDonate: 90,
    desc: 'A lower-priority test collection.',
    long_desc: 'Long description for test collection 3.',
    isOpen: false,
    createdAt: new Date(),
    closedAt: new Date(),
  },
];

// Function to seed the database
const seedData = async () => {
  try {
    // Connect to the database (make sure to change your connection string)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB URI:', env('MONGODB_URI'));

    console.log('Connected to MongoDB');

    // Remove existing collections (optional, only if you want to reset data)
    await CollectionSchema.deleteMany({});
    console.log('Existing collections cleared');

    // Insert the sample data
    const result = await CollectionSchema.insertMany(collections);
    console.log('Seed data inserted:', result);

    // Close the database connection
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

// Run the seed function
seedData();
