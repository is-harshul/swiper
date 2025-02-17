const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get user input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to sweep files
async function sweepFiles(fileTypes, outputDir, targetDir, isCutPaste) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        processDirectory(filePath); // Recursively process directories
      } else if (stat.isFile()) {
        const fileExtension = path.extname(file).toLowerCase(); // Get file extension with dot (e.g., ".mp4")
        if (fileTypes.includes(fileExtension)) {
          const destinationPath = path.join(outputDir, file);

          // Ensure the destination file does not already exist
          let finalDestinationPath = destinationPath;
          let counter = 1;
          while (fs.existsSync(finalDestinationPath)) {
            const fileNameWithoutExt = path.basename(file, fileExtension);
            finalDestinationPath = path.join(outputDir, `${fileNameWithoutExt}_${counter}${fileExtension}`);
            counter++;
          }

          if (isCutPaste) {
            fs.renameSync(filePath, finalDestinationPath);
            console.log(`Moved: ${filePath} to ${finalDestinationPath}`);
          } else {
            fs.copyFileSync(filePath, finalDestinationPath);
            console.log(`Copied: ${filePath} to ${finalDestinationPath}`);
          }
        }
      }
    });
  }

  processDirectory(targetDir);
}

// Main function to run the script
async function main() {
  const fileTypesInput = await askQuestion('Enter the file types (comma-separated, e.g., ".mp4, .mkv, .mp3"): ');
  const outputDir = await askQuestion('Enter the output directory path: ');
  const targetDir = await askQuestion('Enter the target directory path: ');
  const operation = await askQuestion('Do you want to cut-paste (move) or copy-paste? (Enter "cut" or "copy"): ');

  // Process file types input
  const fileTypes = fileTypesInput
    .split(',') // Split by comma
    .map(ext => ext.trim().toLowerCase()); // Trim whitespace and convert to lowercase

  const isCutPaste = operation.toLowerCase() === 'cut';

  try {
    await sweepFiles(fileTypes, outputDir, targetDir, isCutPaste);
    console.log('Operation completed.');
  } catch (e) {
    console.log('Operation Failed.', e);
  }
  rl.close();
}

main();