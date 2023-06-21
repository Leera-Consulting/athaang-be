const WorkflowHistory = require('../models/workflowHistory.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all workflow history
exports.findAll = (req, res) => {

    WorkflowHistory.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow history."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a workflow history by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    WorkflowHistory.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow history."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit workflow history by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    WorkflowHistory.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert workflow history
exports.insert = (req, res) => {
    const requestBody = req.body;

    WorkflowHistory.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result all workflowHistory of a given document from the database
exports.findWorkflowHistoryOfDocument = (req, res) => {
    const { doc_id } = req.params;

    WorkflowHistory.getWorkflowHistoryOfDocument(doc_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while fetching workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result workflow types for travel expenses
exports.findTravelExpenseWorkhistory = (req, res) =>   {
    const { te_id } = req.params;

    WorkflowHistory.getTravelExpenseWorkhistory(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result workflow types for reimbursement
exports.findReimbursementWorkhistory = (req, res) =>   {
    const { re_id } = req.params;

    WorkflowHistory.getReimbursementWorkhistory(re_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result workflow history for supplier invoice
exports.findSupplierInvoiceWorkflowTypes = (req, res) =>   {
    const { si_id } = req.params;

    WorkflowHistory.getSupplierInvoiceWorkflowTypes(si_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result workflow history for purchase order
exports.findPurchaseOrderWorkflowTypes = (req, res) =>   {
    const { po_id } = req.params;

    WorkflowHistory.getPurchaseOrderWorkflowTypes(po_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while getting workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Result workflow history for material requisition
exports.findMaterialRequisitionWorkflowTypes = (req, res) =>   {
    const { pr_id } = req.params;

    WorkflowHistory.getMaterialRequisitionWorkflowTypes(pr_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while getting workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Delete 
exports.delete = (req, res) => {
    const requestBody = req.body;

    WorkflowHistory.delete(requestBody, (err, data) => {
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