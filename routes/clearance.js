const express = require('express');
const router = express.Router();

const ClearanceController = require('../controllers/ClearanceController');

router.post('/add', ClearanceController.addClearance);
router.delete('/delete/:id', ClearanceController.deleteClearance);
router.get('/get', ClearanceController.getClearance);
router.get(
	'/getFinancialDepartment',
	ClearanceController.getClearanceFinancialDepartment,
);
router.get(
	'/searchFinancialDepartment/:id',
	ClearanceController.searchClearanceFinancialDepartment,
);
router.patch(
	'/confirmFinancialDepartment/:id',
	ClearanceController.confirmFinancialDepartment,
);

module.exports = router;