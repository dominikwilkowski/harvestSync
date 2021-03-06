const { getHarvestData } = require('./harvest.js');
const { updateSheet } = require('./sheets.js');
const { version } = require('../package.json');
const { login } = require('./login.js');
const { mark } = require('./log.js');
const chalk = require('chalk');

/**
 * The main function that checks for cli options
 */
function harvest2sheet() {
	if (process.argv.includes('login')) {
		login();
	} else if (process.argv.includes('-v')) {
		console.log(`v${version}`);
		process.exit(0);
	} else {
		sync();
	}
}

/**
 * Sync data from harvest to google sheets
 */
async function sync() {
	// we include it here as it checks for the existence of the `project.json` which doesn't have to exist for the login route
	const { SETTINGS } = require('./settings.js');

	let errors = '';
	const projects = Object.entries(SETTINGS.tasks);
	const allTasks = [];

	await Promise.all(
		projects.map(async ([name, settings], i) => {
			const projectErrors = [];
			console.log();
			console.log(`Running ${chalk.bold(name)}`);
			console.log('               Data fetching from Harvest');
			console.log('               Google Sheet cleared');
			console.log('               Entered data into Google sheet');
			console.log('               Task finished');

			const defaultOutput = [
				'date',
				'user',
				'client',
				'project',
				'task',
				'hours',
				'rounded_hours',
				'notes',
				'billable_rate',
				'billable_amount',
				'cost_rate',
				'cost_amount',
				'currency',
			];

			const projectSettings = {
				HARVEST_ACCESS_TOKEN: SETTINGS.HARVEST_ACCESS_TOKEN,
				HARVEST_ACCOUNT_ID: SETTINGS.HARVEST_ACCOUNT_ID,
				GOOGLE_ID: SETTINGS.GOOGLE_ID,
				GOOGLE_SECRET: SETTINGS.GOOGLE_SECRET,
				GOOGLE_REFRESH_TOKEN: SETTINGS.GOOGLE_REFRESH_TOKEN,
				output: SETTINGS.output || defaultOutput,
				fromDate: SETTINGS.fromDate,
				toDate: SETTINGS.toDate,
				...settings,
			};

			let harvestData;
			try {
				const { csv, errors: harvestErrors } = await getHarvestData(projectSettings);
				harvestData = csv;
				if (harvestErrors) {
					projectErrors.push(harvestErrors);
				}
				mark.ok(4, i, projects.length);
			} catch (error) {
				mark.fail(4, i, projects.length);
				projectErrors.push(error);
			}

			try {
				const sheetsErrors = await updateSheet(projectSettings, harvestData, i, projects.length);
				mark.ok(1, i, projects.length);
				if (sheetsErrors) {
					projectErrors.push(sheetsErrors);
				}
			} catch (error) {
				mark.fail(1, i, projects.length);
				projectErrors.push(error);
			}

			if (projectErrors.length) {
				errors += `Found errors in project "${chalk.bold(name)}"\n${chalk.red(
					projectErrors.join('\n')
				)}`;
			}
		})
	);

	if (errors) {
		console.error(`\n${errors}`);
	}
	console.log();
}

module.exports = {
	harvest2sheet,
};
