module.exports = async (req,res,next) => {
    const isLandlord = req.user.role === "LANDLORD"

    if (isLandlord) {
        return next()
    };

    res.status(403).json({
        message : "This route accessible only for Landlords",
    })
}