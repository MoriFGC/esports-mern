import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true, 
        },

        game: {
            type: String,
            required: true,
            trim: true
        },

        country: {
            type: String,
            required: true,
            trim: true
        },

        founded_Year: {
            type: Number,
            required: true,
            trim: true,
            min: 1990,
            max: new Date().getFullYear()
        },

        logo: {
            type: String,
            required: true,
            trim: true
        },

        website: {
            type: String,
            required: true,
            trim: true
        }
    },

    {
        collection: 'teams',
        timestamps: true
    }
);

export default mongoose.model('Team', teamSchema );