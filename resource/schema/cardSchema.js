import mongoose from "mongoose";
const { Schema } = mongoose;

cont cardSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        pack: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
        },
        power: {
            type: Number,
            required: true,
        },
        time: {
            type: Number,
            required: true,
        },
        attr: {
            type: String,
            required: true,
        },
        atkday: {
            type: String,
            required: true,
        },
        atknight: {
            type: String,
            required: true,
        },
        
    }