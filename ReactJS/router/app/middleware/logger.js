const logger = store => next => action => {
	console.log(`attempted ${action.type}`);
	let ret = next(action);
	console.log(`completed ${action.type}`);
	return ret;
};
export default logger;