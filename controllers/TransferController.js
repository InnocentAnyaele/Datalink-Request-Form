const Clearance = require('../models/clearance');
const Transfer = require('../models/transfer');

const addTransfer = (req, res, next) => {
	let transfer = new Transfer({
		name: req.body.name,
		id: req.body.id,
		program: req.body.program,
		programSelect: req.body.programSelect,
		year: req.body.year,
		contact: req.body.contact,
		level: req.body.level,
		from: req.body.from,
		to: req.body.to,
		semester: req.body.semester,
		session: req.body.session,
		campus: req.body.campus,
		reason: req.body.reason,
		approved: false,
		status: 'pending',
	});
	transfer
		.save()
		.then(() => {
			res.status(200).json({ message: 'Request submitted' });
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const getTransfer = (req, res, next) => {
	Transfer.find()
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(400).send(err);
		});
};

const deleteTransfer = (req, res, next) => {
	Transfer.findOneAndDelete({ _id: req.params.id }, function (err, results) {
		if (err) {
			res.status(400).send(err);
		}
		if (results) {
			res.status(200).json({ message: 'Request deleted' });
		}
	});
};

const getTransferFalse = (req, res, next) => {
	Transfer.find({ approved: false })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getTransferTrue = (req, res, next) => {
	Transfer.find({ $and: [{ approved: false }, { status: 'pending' }] })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchTransferTrue = (req, res, next) => {
	Transfer.find({
		$and: [
			{ id: { $regex: req.params.id } },
			{ approved: true },
			{ status: 'pending' },
		],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchTransferFalse = (req, res, next) => {
	Transfer.find({
		$and: [{ id: { $regex: req.params.id } }, { approved: false }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const confirmTransfer = (req, res, next) => {
	Transfer.findOne({ _id: req.params.id })
		.then((request) => {
			request.approved = true;
			request
				.save()
				.then(() => {
					res.status(200).send('Approved  by Registrar');
				})
				.catch(() => {
					res.status(400).send("Can't approve. Try again later");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const completeTransfer = (req, res, next) => {
	Transfer.findOne({ _id: req.params.id })
		.then((request) => {
			request.status = 'completed';
			request
				.save()
				.then(() => {
					res.status(200).send('Status Changed');
				})
				.catch(() => {
					res.status(400).send("Can't change. Try again later");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const pickedTransfer = (req, res, next) => {
	Transfer.findOne({ _id: req.params.id })
		.then((request) => {
			request.status = 'picked';
			request
				.save()
				.then(() => {
					res.status(200).send('Status Changed');
				})
				.catch(() => {
					res.status(400).send("Can't change. Try again later");
				});
		})
		.catch((err) => {
			res.status(500).send("Can't find user");
		});
};

const getCompleteTransfer = (req, res, next) => {
	Transfer.find({ status: 'completed' })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const getPickedTransfer = (req, res, next) => {
	Transfer.find({ status: 'picked' })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchCompleteTransfer = (req, res, next) => {
	Transfer.find({
		$and: [{ id: { $regex: req.params.id } }, { status: 'completed' }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

const searchPickedTransfer = (req, res, next) => {
	Transfer.find({
		$and: [{ id: { $regex: req.params.id } }, { status: 'picked' }],
	})
		.sort({ createdAt: -1 })
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => {
			res.status(404).send(err);
		});
};

module.exports = {
	addTransfer,
	deleteTransfer,
	getTransferFalse,
	getTransferTrue,
	searchTransferFalse,
	searchTransferTrue,
	confirmTransfer,
	getTransfer,
	completeTransfer,
	pickedTransfer,
	getCompleteTransfer,
	getPickedTransfer,
	searchCompleteTransfer,
	searchPickedTransfer,
};
