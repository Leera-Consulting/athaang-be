const TenderHeader = require('../models/tenderHeader.model');
const { handleSqlErrorMessage } = require("../utils/error");
const { removeDuplicates } = require("../utils/middlewares")

// Responses for fetching all tender header 
exports.findAll = (req, res) => {

    TenderHeader.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender header."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a tender header by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TenderHeader.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Tender Header."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit tender header by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TenderHeader.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing tender header."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert tender header 
exports.insert = (req, res) => {
    const requestBody = req.body;

    TenderHeader.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting tender header."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Get parties of a tender supplier 
exports.tenderSupplierParty = (req, res) => {

    TenderHeader.tenderSupplierParty((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while getting suppliers."
            })
        } else {
            let newData = [];

            for (let i = 0; i < data.length; i++) {
                let newArray = data.filter(function (el) {
                    return el.tender_hdr_id === data[i].tender_hdr_id
                })

                let tender_send = ""
                for (let j = 0; j < newArray.length; j++)   {
                    if (j == newArray.length - 1 || newArray.length == 1) {
                        tender_send += newArray[j].party_name 
                    } else {
                        tender_send += newArray[j].party_name + ", "
                    }
                }
                newData.push({
                    tender_hdr_id: data[i].tender_hdr_id,
                    tender_send: tender_send
                })
            }

            res.status(200).send({
                success: true,
                data: removeDuplicates(newData, 'tender_hdr_id')
            })
        }
    })
}

// Get quote of a tender supplier 
exports.quoteSupplierParty = (req, res) => {

    TenderHeader.quoteSupplierParty((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while getting suppliers."
            })
        } else {
            let newData = [];

            for (let i = 0; i < data.length; i++) {
                let newArray = data.filter(function (el) {
                    return el.tender_hdr_id === data[i].tender_hdr_id
                })

                let tender_send = ""
                for (let j = 0; j < newArray.length; j++)   {
                    if (!tender_send.includes(newArray[j].party_name))  {
                        if (j == newArray.length - 1 || newArray.length == 1) {
                            tender_send += newArray[j].party_name 
                        } else {
                            tender_send += newArray[j].party_name + ", "
                        }
                    }
                }
                newData.push({
                    tender_hdr_id: data[i].tender_hdr_id,
                    tender_send: tender_send
                })
            }

            res.status(200).send({
                success: true,
                data: removeDuplicates(newData, 'tender_hdr_id')
            })
        }
    })
}