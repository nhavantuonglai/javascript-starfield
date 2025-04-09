const { spawn } = require('child_process');
const path = require('path');

function runMarkdownProcessor(args) {
	return new Promise((resolve, reject) => {
		const pythonPath = path.join(__dirname, 'index.py');
		const pythonProcess = spawn('python', [pythonPath, ...args]);

		let output = '';
		let errorOutput = '';

		pythonProcess.stdout.on('data', (data) => {
			output += data.toString();
		});

		pythonProcess.stderr.on('data', (data) => {
			errorOutput += data.toString();
		});

		pythonProcess.on('close', (code) => {
			if (code === 0) {
				resolve(output);
			} else {
				reject(new Error(`Process exited with code ${code}: ${errorOutput}`));
			}
		});
	});
}

async function processMarkdown(feature, directory, lineNumber, customInput) {
	try {
		const args = [feature, directory || '.', lineNumber || (feature === '1' ? '5' : '2')];
		if (customInput) args.push(customInput);
		const result = await runMarkdownProcessor(args);
		console.log(result);
		return result;
	} catch (error) {
		console.error(error.message);
		throw error;
	}
}

module.exports = { processMarkdown };