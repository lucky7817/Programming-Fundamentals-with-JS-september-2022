function extractFile(filePath) {

    let falePathArray = filePath.split('\\');
    let lastElement= falePathArray[falePathArray.length - 1];

    let lastElementArray = lastElement.split('.')

    let fileExtension = lastElementArray.pop();
    let fileName = lastElementArray.join('.')

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);  
}


extractFile('C:\\Internal\\training-internal\\Template.pptx');
//extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');