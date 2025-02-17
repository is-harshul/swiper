# File Sweeper Script

A Node.js script to sweep (copy or move) specific types of files from a target directory (and its subdirectories) to an output directory. The script supports multiple file types and allows the user to choose between a copy-paste or cut-paste operation.

---

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Basic Usage](#basic-usage)
   - [Examples](#examples)
4. [Edge Cases](#edge-cases)
5. [Troubleshooting](#troubleshooting)
6. [License](#license)

---

## Features
- **Recursive Search**: Sweeps files from the target directory and all its subdirectories.
- **Multiple File Types**: Supports sweeping multiple file types (e.g., `.mp4`, `.mkv`, `.mp3`).
- **Copy or Move**: Allows the user to choose between a copy-paste or cut-paste operation.
- **User-Friendly**: Takes user inputs for file types, target directory, output directory, and operation type.

---

## Installation

1. **Install Node.js**:
   - Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **Download the Script**:
   - Save the script to a file, e.g., `sweepFiles.js`.

3. **Run the Script**:
   - Open a terminal and navigate to the directory where the script is saved.
   - Run the script using Node.js:
     ```bash
     node sweepFiles.js
     ```

---

## Usage

### Basic Usage
1. Run the script:
   ```bash
   node sweepFiles.js
   ```
2. Follow the prompts:
   - Enter the file types (comma-separated, e.g., `mp4, mkv, mp3`).
   - Enter the output directory path (e.g., `~/user/harshulkansal/my-videos`).
   - Enter the target directory path (e.g., `~/user/harshulkansal/downloads`).
   - Choose the operation type (`cut` for move, `copy` for copy).

### Examples

#### Example 1: Copy All `.mp4` and `.mkv` Files
- **Input**:
  ~
  Enter the file types (comma-separated, e.g., "mp4, mkv, mp3"): mp4, mkv
  Enter the output directory path: ~/user/harshulkansal/my-videos
  Enter the target directory path: ~/user/harshulkansal/downloads
  Do you want to cut-paste (move) or copy-paste? (Enter "cut" or "copy"): copy
  ~
- **Action**:
  - The script will copy all `.mp4` and `.mkv` files from `~/user/harshulkansal/downloads` (and its subdirectories) to `~/user/harshulkansal/my-videos`.

#### Example 2: Move All `.mp3` Files
- **Input**:
  ~
  Enter the file types (comma-separated, e.g., "mp4, mkv, mp3"): mp3
  Enter the output directory path: ~/user/harshulkansal/my-music
  Enter the target directory path: ~/user/harshulkansal/downloads
  Do you want to cut-paste (move) or copy-paste? (Enter "cut" or "copy"): cut
  ~
- **Action**:
  - The script will move all `.mp3` files from `~/user/harshulkansal/downloads` (and its subdirectories) to `~/user/harshulkansal/my-music`.

## Edge Cases

1. **Duplicate Filenames**:
   - If a file with the same name already exists in the output directory, the script will overwrite it. To avoid this, ensure the output directory is empty or manually handle duplicates.

2. **Non-Existent Directories**:
   - If the output directory does not exist, the script will create it automatically.

3. **Invalid File Types**:
   - If the user enters invalid file types (e.g., `mp4, abc, xyz`), the script will ignore the invalid types and process only valid ones.

4. **No Matching Files**:
   - If no files match the specified types, the script will complete without copying or moving any files.

---

## Troubleshooting

1. **Script Doesn’t Run**:
   - Ensure Node.js is installed and accessible from the terminal.
   - Verify the script file (`sweepFiles.js`) is in the correct directory.

2. **No Files Are Copied/Moved**:
   - Check the target directory path and ensure it contains files with the specified extensions.
   - Ensure the file types are entered without dots (e.g., `mp4`, not `.mp4`).

3. **Permission Errors**:
   - Ensure you have read/write permissions for the target and output directories.

4. **Unexpected Behavior**:
   - Double-check the input paths and file types for typos or mistakes.

---

## License

This project is open-source and available under the [MIT License](LICENSE).