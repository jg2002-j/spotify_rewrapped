const loadFiles = (files, startDate, endDate) => {
    const regex = /\d{4}-\d{4}/;
    const relevantFiles = [];
    files.forEach((file) => {
        if (regex.test(file)) relevantFiles.push(file);
    });
    console.log(relevantFiles);
};

export default loadFiles;
