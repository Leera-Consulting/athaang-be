const FileUploads = require('../models/fileUploads.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all file uploads
exports.findAll = (req, res) => {

    FileUploads.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a file uploads by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    FileUploads.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit file uploads by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    FileUploads.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing FileUploads."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert file uploads
exports.insert = (req, res) => {
    const requestBody = req.body;

    FileUploads.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing FileUploads."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Responses for fetching all travel approval file uploads
exports.findTravelApprovalFileUploads = (req, res) => {
    const { ta_id } = req.params;

    FileUploads.getTravelApprovalFileUploads(ta_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all reimbursement file uploads
exports.findReimbursementFileUploads = (req, res) => {
    const { re_id } = req.params;

    FileUploads.getReimbursementFileUploads(re_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all supplier invoice file uploads
exports.findSupplierInvoiceFileUploads = (req, res) => {
    const { si_id } = req.params;

    FileUploads.getSupplierInvoiceFileUploads(si_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all travel expenses file uploads
exports.findTravelExpensesFileUploads = (req, res) => {
    const { te_id } = req.params;

    FileUploads.getTravelExpensesFileUploads(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};


// Responses for fetching all purchase order file uploads
exports.findPurchaseOrderFileUploads = (req, res) => {
    const { po_id } = req.params;

    FileUploads.getPurchaseOrderFileUploads(po_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all material requisition file uploads
exports.findMaterialRequisitionFileUploads = (req, res) => {
    const { pr_id } = req.params;

    FileUploads.getMaterialRequisitionFileUploads(pr_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving material requisition file upload."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all goods issue file uploads
exports.findGoodsIsseFileUploads = (req, res) => {
    const { gi_id } = req.params;

    FileUploads.getGoodsIssueFileUploads(gi_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving goods issue file uploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Delete 
exports.delete = (req, res) => {
    const requestBody = req.body;

    FileUploads.delete(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while deleting."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}