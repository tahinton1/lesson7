import mongoose from "mongoose";


const tiktokSchema = mongoose.Schema({
    vidUrl: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
});

//collection
export default mongoose.model("tiktokvideos", tiktokSchema);