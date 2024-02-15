import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
    policyNumber: {
        type: String,
        required: true
    },
    policyStartDate: {
        type: Date,
        required: true
    },
    policyEndDate: {
        type: Date,
        required: true
    },

    agentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent'
    },
    carrierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Carrier'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    lobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lob'
    },
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }
});

const Policy = mongoose.model('Policy', policySchema);

export default Policy;

