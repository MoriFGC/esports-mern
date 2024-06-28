import mongoose from 'mongoose';


const playerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        
        team: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true,
            enum: ["Fragger", "Support", "Healer", "Droner"],
            default: 'Fragger'
        },

        age: {
            type: Number,
            required: true,
            min: 18,
            max: 40
        },

        nickname: {
            type: String,
            unique: true,
            required: true
        },

        nazionalità: {
            type: String,
            required: true,
            trim: true,
        }
    },

    {
      collection: 'players',
      timestamps: true   
    }
);

export default mongoose.model('Player', playerSchema);