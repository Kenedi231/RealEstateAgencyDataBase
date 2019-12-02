const databaseModel = require('../../models/db');
const databaseName = require('../../constants/databaseName');
const getUpdateStrings = require('../../utils/getUpdateStrings');


const updateContract = async (req, res, next) => {
    const {apartmentId, ownerId, employerId, roommates, date, validity} = req.body;
    const id = parseInt(req.params.id);
    const dataName = 'apartmentid, ownerid, employerid, roommates, date, validity';
    const values = getUpdateStrings(dataName);
    const updateContract = await databaseModel.updateDataInTable(databaseName.data, values,[apartmentId, ownerId, employerId, roommates, date, validity], id);

    res.status(200).json({status: 'OK'});
};

module.exports = updateContract;