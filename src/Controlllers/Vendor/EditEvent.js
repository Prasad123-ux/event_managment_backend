const { EventData } = require("../../Modules/Vendor/Event");

const EditEventDataController = async (req, res) => {
    // console.log(req.body);
     const id = req.params.id;
    // console.log(req.body.media)
    // console.log(id);
    const media= req.body.media 

    try {
        const updateData = {};

        if (req.body.eventName) updateData.eventName = req.body.eventName;
        if (req.body.description) updateData.eventDescription = req.body.description;
        if (req.body.date) updateData.eventDate = req.body.date;
        if(req.body.media) {
            const media= req.body.media 
            console.log(req.params.id)
            const eventMedia= EventData.findOne({_id:req.params.id}).exec()
            if(!eventMedia){
                
                return res.status(404).json({ message: 'Event not found' });
            }
            console.log(eventMedia)
            const existingMedia = eventMedia.media || [];
            console.log(existingMedia)

            // Combine and ensure uniqueness
            const updatedMedia = Array.from(new Set([...existingMedia, ...media]));

            // Update media field
            updateData.media = updatedMedia;
        }

        const event = await EventData.findByIdAndUpdate(id, updateData, { new: true }).exec();
        
        if (!event) {
            return res.status(403).json({ Success: false, Message: "Data Not Found Properly" });
        }

        console.log(event);
        return res.status(200).json({ Success: true, Message: "Event Updated Successfully", event });
    } catch (err) {
        return res.status(500).json({ Success: false, Message: "Server error", error: err.message });
    }
};

module.exports = { EditEventDataController };
